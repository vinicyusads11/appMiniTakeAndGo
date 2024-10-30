import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Cart() {
  const router = useRouter();
  const { cart } = useLocalSearchParams();
  const initialCartItems = JSON.parse(cart).map((item, index) => ({ ...item, id: index }));

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Função para aumentar a quantidade
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Função para diminuir a quantidade e remover o item se chegar a zero
  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0)
    );
  };

  // Função para esvaziar o carrinho
  const emptyCart = () => {
    setCartItems([]);
  };

  // Função para redirecionar à tela de escaneamento
  const handleScanAnotherProduct = () => {
    router.push({
      pathname: '/screens/ScanBarCode',
      params: { cart: JSON.stringify(cartItems) }
    });
  };

  // Calcular o total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

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

      {/* Botões para Esvaziar Carrinho e Escanear Outro Produto */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.emptyCartButton} onPress={emptyCart}>
          <Text style={styles.emptyCartButtonText}>Esvaziar Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanAnotherProduct}>
          <Text style={styles.scanButtonText}>Escanear Outro Produto</Text>
        </TouchableOpacity>
      </View>
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

  // Estilo dos Botões de Esvaziar Carrinho e Escanear Outro Produto
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
  emptyCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
