import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  const handleConfirmPurchase = () => {
    router.push({
      pathname: '/screens/Payment',
      params: { total },
    });
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartMessage}>A sua cesta de compras está vazia!</Text>
        <Text style={styles.emptyCartInstruction}>
          Clique no ícone de CÓDIGO DE BARRAS abaixo para escanear seus produtos
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
      <Text style={styles.header}>Carrinho de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.name} - R$ {item.price.toFixed(2)} x {item.quantity}
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: R$ {total}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.emptyCartButton} onPress={emptyCart}>
          <Text style={styles.emptyCartButtonText}>Esvaziar Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanAnotherProduct}>
          <Text style={styles.scanButtonText}>Escanear Outro Produto</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPurchase}>
        <Text style={styles.confirmButtonText}>Confirmar Compra e Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  item: { fontSize: 18 },
  buttonsContainer: { flexDirection: 'row', alignItems: 'center' },
  buttonText: { fontSize: 20, padding: 10, color: 'blue', fontWeight: 'bold' },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
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
    marginTop: 30,
  },
  confirmButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },

  // Estilos para o estado de carrinho vazio
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyCartMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptyCartInstruction: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  barcodeButton: {
    marginTop: 20,
  },
});
