import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PurchaseSummary() {
  const { cartItems, total } = useLocalSearchParams();
  const items = cartItems ? JSON.parse(cartItems) : []; // Verifica se cartItems está definido

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aqui estão todos os produtos que você acabou de comprar!</Text>

      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())} // Garante que um id sempre será usado
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.image_url || 'https://via.placeholder.com/50' }} // Imagem padrão se não houver imagem
                style={styles.image}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name || 'Produto sem nome'}</Text>
                <Text style={styles.quantity}>Quantidade: {item.quantity || 1}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyMessage}>Nenhum item encontrado no resumo da compra.</Text>
      )}

      <Text style={styles.total}>Valor Total: R$ {total || '0.00'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});
