import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function PurchaseSummary() {
  const { cartItems, total, transactionId, paymentDate, paymentMethod } = useLocalSearchParams();
  const items = cartItems ? JSON.parse(cartItems) : []; // Decodifica os itens do carrinho

  const generatePDF = async () => {
    const html = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { color: #3CB3F6; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; text-align: left; padding: 8px; }
          th { background-color: #3CB3F6; color: white; }
          .details { margin-top: 20px; }
          .total { font-weight: bold; font-size: 1.2em; text-align: right; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>Recibo de Compra</h1>
        <div class="details">
          <p><strong>ID da Compra:</strong> ${transactionId || 'N/A'}</p>
          <p><strong>Data da Transação:</strong> ${paymentDate ? new Date(paymentDate).toLocaleString() : 'N/A'}</p>
          <p><strong>Forma de Pagamento:</strong> ${paymentMethod || 'N/A'}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${items
              .map(
                (item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>R$ ${item.price.toFixed(2)}</td>
                <td>R$ ${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
        <p class="total">Valor Total: R$ ${total}</p>
      </body>
      </html>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html });
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        🎉 Pronto! Agora que seu pagamento foi aprovado, é só levar seus produtos para casa! 🛒
      </Text>
      <Text style={styles.subHeader}>
        Nesta tela, você pode visualizar os detalhes da compra, os produtos adquiridos e salvar o recibo da compra.
      </Text>

      {/* Informações da compra */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>📋 Informações da Compra</Text>
        <Text style={styles.detailText}>🆔 ID da Compra: {transactionId || 'N/A'}</Text>
        <Text style={styles.detailText}>📅 Data da Transação: {paymentDate ? new Date(paymentDate).toLocaleString() : 'N/A'}</Text>
        <Text style={styles.detailText}>💳 Forma de Pagamento: {paymentMethod || 'N/A'}</Text>
        <Text style={styles.detailText}>💰 Valor Total: R$ {total || '0.00'}</Text>
      </View>

      {/* Lista de produtos */}
      <Text style={styles.productsTitle}>🛍️ Produtos Adquiridos</Text>
      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.image_url || 'https://via.placeholder.com/50' }}
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

      {/* Botão para baixar o recibo */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.downloadButton} onPress={generatePDF}>
          <Text style={styles.downloadButtonText}>📥 Salvar Recibo de Compra</Text>
        </TouchableOpacity>
      </View>

      {/* Mensagem final */}
      <Text style={styles.finalMessage}>
        Obrigado por comprar com a MINI! 😁
      </Text>
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
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#D1E7DD',
    padding: 15,
    borderRadius: 8,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  productsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    color: '#666',
  },
  priceValue: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  quantity: {
    fontSize: 15,
    color: '#555',
    marginTop: 5,
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
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#3CB3F6',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  downloadButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  finalMessage: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#fffffff',
  },
});
