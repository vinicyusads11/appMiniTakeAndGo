import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PurchaseSummary() {
  const { cartItems, total } = useLocalSearchParams();
  const items = cartItems ? JSON.parse(cartItems) : []; // Decodifica os itens do carrinho

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        🎉 Aqui estão os produtos que você acabou de comprar! Obrigado por escolher a MiniTakeAndGo! 🛒
      </Text>

      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString() // Garante uma chave válida
          }
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.image_url || 'https://via.placeholder.com/50' }} // Imagem padrão se ausente
                style={styles.image}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name || 'Produto sem nome'}</Text>
                <Text style={styles.price}>
                  Valor unitário: <Text style={styles.priceValue}>R$ {item.price ? item.price.toFixed(2) : '0.00'}</Text>
                </Text>
                <Text style={styles.quantity}>Quantidade: {item.quantity ? item.quantity : 1}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyMessage}>Nenhum item encontrado no resumo da compra.</Text>
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>💰 Valor total:</Text>
        <Text style={styles.totalValue}>R$ {total || '0.00'}</Text>
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#D1E7DD',
    padding: 15,
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  quantity: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  totalContainer: {
    marginTop: 30,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFEFEF',
    borderRadius: 8,
  },
});
