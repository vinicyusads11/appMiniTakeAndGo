import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faPix } from '@fortawesome/free-brands-svg-icons';
import * as Clipboard from 'expo-clipboard';

export default function Payment() {
  const router = useRouter();
  const { qrCode, pixCode, total, cartItems, id } = useLocalSearchParams();
  const [checkingPayment, setCheckingPayment] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(pixCode);
    Alert.alert('Código Pix Copiado!', 'Você pode colar no aplicativo do banco para realizar o pagamento.');
    setCheckingPayment(true); // Começa a verificar o pagamento
  };

  // Função para verificar o status do pagamento
  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`http://192.168.1.2:3000/consultar-pagamento/${id}`);
      const data = await response.json();

      if (data.status === 'approved') {
        setCheckingPayment(false);
        router.push({
          pathname: '/screens/PurchaseSummary',
          params: { cartItems: JSON.stringify(cartItems), total },
        });
      } else if (data.status === 'pending') {
        setTimeout(checkPaymentStatus, 5000); // Verifica novamente após 5 segundos
      } else {
        Alert.alert('Pagamento não aprovado!', 'Verifique seu pagamento e tente novamente.');
        setCheckingPayment(false);
      }
    } catch (error) {
      console.error('Erro ao verificar pagamento:', error);
      Alert.alert('Erro!', 'Não foi possível verificar o status do pagamento. Tente novamente.');
      setCheckingPayment(false);
    }
  };

  useEffect(() => {
    if (checkingPayment) {
      checkPaymentStatus();
    }
  }, [checkingPayment]);

  if (checkingPayment) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Verificando status do pagamento...</Text>
        <ActivityIndicator size="large" color="#4DB6AC" />
        <Text style={styles.instructions}>
          Assim que fizer o pagamento, sua compra será aprovada em instantes!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Pagamento</Text>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Valor total da compra:</Text>
          <Text style={styles.totalAmount}>R$ {total}</Text>
        </View>

        <View style={styles.pixHeaderContainer}>
          <FontAwesomeIcon icon={faPix} size={20} color="#4DB6AC" style={styles.pixIcon} />
          <Text style={styles.pixHeader}>Pix Copia e Cola</Text>
        </View>

        {qrCode ? (
          <Image
            source={{ uri: `data:image/png;base64,${qrCode}` }}
            style={styles.qrCode}
          />
        ) : (
          <Text style={styles.errorMessage}>QR Code não disponível.</Text>
        )}

        <Text style={styles.instructions}>
          <Text style={styles.instructionsTitle}>Instruções: </Text>
          Para finalizar a compra, leia o QRCODE acima ou copie e cole o código abaixo no seu aplicativo de pagamento de sua preferência.
        </Text>

        {pixCode ? (
          <View style={styles.pixCodeContainer}>
            <Text style={styles.pixCodeLabel}>Código Pix Copia e Cola:</Text>
            <Text style={styles.pixCode}>{pixCode}</Text>
            <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
              <Text style={styles.copyButtonText}>
                Copiar código PIX
                <FontAwesomeIcon icon={faCopy} size={16} color="#FFFFFF" style={styles.copyIcon} />
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.errorMessage}>Código Pix não disponível.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    color: '#53B3F6',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  pixHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pixIcon: {
    marginRight: 5,
  },
  pixHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4DB6AC',
  },
  qrCode: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '##000000',
    paddingHorizontal: 10,
  },
  instructionsTitle: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pixCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pixCodeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  pixCode: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  copyButton: {
    backgroundColor: '#3CB3F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 5,
  },
});
