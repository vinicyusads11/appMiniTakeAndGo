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
      const response = await fetch('https://appminitakeandgo.onrender.com/criar-pix', {
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
            <View style={styles.infoContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Text style={styles.quantityLabel}>Quantidade</Text>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                <Icon name="plus-circle-outline" size={30} color="#3CB3F6" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Icon name="minus-circle-outline" size={30} color="#3CB3F6" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.emptyCartButton} onPress={emptyCart}>
          <Text style={styles.emptyCartButtonText}>Esvaziar Cesta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanAnotherProduct}>
          <Text style={styles.scanButtonText}>Escanear mais produtos</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#F8F9FA',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    padding: 10,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 14,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  quantityLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 5,
  },
  paymentContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethod: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4DB6AC',
  },
  pixIcon: {
    marginLeft: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  emptyCartButton: {
    backgroundColor: '#DC3545',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  emptyCartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: '#28A745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  emptyCartMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  emptyCartInstruction: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  codigoDeBarras: {
    color: '#3CB3F6',
    fontWeight: 'bold',
  },
  barcodeButton: {
    marginTop: 270,
  },
});
