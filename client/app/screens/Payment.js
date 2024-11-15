import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Clipboard, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Payment() {
  const router = useRouter();
  const { qrCode, pixCode } = useLocalSearchParams();

  const copyToClipboard = () => {
    Clipboard.setString(pixCode);
    Alert.alert('Código Pix Copiado!', 'Você pode colar no aplicativo do banco para realizar o pagamento.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pagamento via Pix</Text>
      <Text style={styles.description}>
      Instruções: Para finalizar a compra, leia o QRCODE acima ou copie e cole o código abaixo no seu aplicativo de pagamento de sua preferência. Após isso, sua compra será aprovada em instantes. 
      </Text>

      {/* Exibe o QR Code */}
      {qrCode ? (
        <Image
          source={{ uri: `data:image/png;base64,${qrCode}` }}
          style={styles.qrCode}
        />
      ) : (
        <Text style={styles.errorMessage}>QR Code não disponível.</Text>
      )}

      {/* Código Pix "Copia e Cola" */}
      {pixCode ? (
        <View style={styles.pixCodeContainer}>
          <Text style={styles.pixCodeLabel}>Código Pix:</Text>
          <Text style={styles.pixCode}>{pixCode}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Text style={styles.copyButtonText}>Copiar Código</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.errorMessage}>Código Pix não disponível.</Text>
      )}

      {/* Botão para voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.backButtonText}>Voltar à Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  qrCode: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  pixCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pixCodeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  pixCode: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: '#3CB3F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },
  copyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#3CB3F6',
    position: 'absolute', // Torna o botão absoluto na tela
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
    bottom: 30,     
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
