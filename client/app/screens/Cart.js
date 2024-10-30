import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Cart() {
  const router = useRouter();
  const { cart } = useLocalSearchParams();
  const initialCartItems = JSON.parse(cart);

  // Estado para gerenciar a quantidade de cada item
  const [cartItems, setCartItems] = useState(
    initialCartItems.map(item => ({ ...item, quantity: 1 }))
  );

  // Função para aumentar a quantidade
  const increaseQuantity = (barcode) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.barcode === barcode
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Função para diminuir a quantidade
  const decreaseQuantity = (barcode) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.barcode === barcode && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Cálculo do total com base nas quantidades
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  // Função para escanear outro produto
  const handleScanAnotherProduct = () => {
    router.push({
      pathname: '/screens/ScanBarCode',
      params: { cart: JSON.stringify(cartItems) }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.barcode}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.name} - R$ {item.price.toFixed(2)} x {item.quantity}
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.barcode)}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => increaseQuantity(item.barcode)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: R$ {total}</Text>
      <Button title="Escanear outro produto" onPress={handleScanAnotherProduct} />
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
  buttonText: {
    fontSize: 20,
    padding: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
});
