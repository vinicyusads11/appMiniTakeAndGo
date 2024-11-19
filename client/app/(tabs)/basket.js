import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPix } from '@fortawesome/free-brands-svg-icons';

export default function Basket() {
  const router = useRouter();
  const { cart } = useLocalSearchParams();
  const initialCartItems = cart
    ? JSON.parse(cart).map((item, index) => ({ ...item, id: index }))
    : [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const handleScanAnotherProduct = () => {
    router.push({
      pathname: '/screens/ScanBarCode',
      params: { cart: JSON.stringify(cartItems) },
    });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleConfirmPurchase = async () => {
    try {
      const response = await fetch('http://192.168.1.2:3000/criar-pix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transaction_amount: parseFloat(total),
          description: 'Compra no MiniTakeAndGo',
          paymentMethodId: 'pix',
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar pagamento');
      }

      const paymentData = await response.json();

      // Redireciona para a tela de pagamento com os dados do Pix
      router.push({
        pathname: '/screens/Payment',
        params: {
          qrCode: paymentData.point_of_interaction.transaction_data.qr_code_base64,
          pixCode: paymentData.point_of_interaction.transaction_data.qr_code,
          id: paymentData.id, 
          total,
          cartItems: JSON.stringify(cartItems),
        },
      });
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      Alert.alert('Erro', 'Não foi possível processar o pagamento. Tente novamente.');
    }
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartMessage}>A sua cesta de compras está vazia!</Text>
        <Text style={styles.emptyCartInstruction}>
          Clique no ícone de <Text style={styles.codigoDeBarras}>CÓDIGO DE BARRAS</Text> abaixo para
          escanear seus produtos e adicioná-los à cesta
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/screens/ScanBarCode')}
          style={styles.barcodeButton}
        >
          <Icon name="barcode-scan" size={180} color="#3CB3F6" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cesta</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image_url }} style={styles.itemImage} />
            <Text style={styles.item}>
              {item.name} - R$ {item.price.toFixed(2)}
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Icon name="minus-circle-outline" size={30} color="#3CB3F6" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                <Icon name="plus-circle-outline" size={30} color="#3CB3F6" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Botões de Esvaziar e Escanear */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.emptyCartButton} onPress={emptyCart}>
          <Text style={styles.emptyCartButtonText}>Esvaziar Cesta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanAnotherProduct}>
          <Text style={styles.scanButtonText}>Escanear mais produtos</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Forma de Pagamento e Valor Total */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Forma de Pagamento:</Text>
        <View style={styles.paymentMethodContainer}>
          <Text style={styles.paymentMethod}>PIX</Text>
          <FontAwesomeIcon icon={faPix} size={20} color="#4DB6AC" style={styles.pixIcon} />
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Valor Total da Compra:</Text>
        <Text style={styles.totalAmount}>R$ {total}</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPurchase}>
        <Text style={styles.confirmButtonText}>Confirmar Compra e Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  item: { fontSize: 18, flex: 1 },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginHorizontal: 10,
  },

  // Estilos de pagamento e valor total
  paymentContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  paymentText: {
    fontSize: 18,
    color: '#333',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethod: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  pixIcon: {
    marginLeft: 5,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  emptyCartButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  emptyCartButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  scanButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  scanButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  confirmButton: {
    backgroundColor: '#3cb3f6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },

  // Estilos para o estado de carrinho vazio
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  emptyCartMessage: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyCartInstruction: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  codigoDeBarras: {
    color: '#3cb3f6',
    fontWeight: 'bold',
  },
  barcodeButton: {
    marginTop: 230,
  },
});
