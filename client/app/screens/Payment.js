import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator, Modal } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faPix } from '@fortawesome/free-brands-svg-icons';
import * as Clipboard from 'expo-clipboard';

export default function Payment() {
  const router = useRouter();
  const { qrCode, pixCode, total, cartItems, id } = useLocalSearchParams();
  const [checkingPayment, setCheckingPayment] = useState(false);
  const [showApprovedPopup, setShowApprovedPopup] = useState(false); // Estado para o popup

  const copyToClipboard = () => {
    Clipboard.setStringAsync(pixCode);
    setCheckingPayment(true); // Começa a verificar o pagamento
  };

  // Função para verificar o status do pagamento
  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`http://192.168.1.2:3000/consultar-pagamento/${id}`);
      const data = await response.json();

      if (data.status === 'approved') {
        setCheckingPayment(false);
        setShowApprovedPopup(true); // Mostra o popup
        setTimeout(() => {
          setShowApprovedPopup(false);
          router.push({
            pathname: '/screens/PurchaseSummary',
            params: {
              cartItems, // Passa os itens do carrinho diretamente
              total,
              transactionId: id, // ID da transação
              paymentDate: data.date_approved, // Data da transação
              paymentMethod: data.payment_method_id, // Forma de pagamento
            },
          });
        }, 2000); // 2 segundos de exibição do popup
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
          Assim que você fizer o pagamento, sua compra será aprovada em instantes!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Popup de pagamento aprovado */}
      <Modal visible={showApprovedPopup} transparent={true} animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <FontAwesomeIcon icon={faCheckCircle} size={50} color="#4CAF50" />
            <Text style={styles.popupText}>Pagamento Aprovado!</Text>
          </View>
        </View>
      </Modal>

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
    backgroundColor: '#F8F9FA', 
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
    marginBottom: 15,
    textAlign: 'center',
    color: '#343A40', 
    backgroundColor: '#C5E3F3', 
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495057',
  },
  totalAmount: {
    fontSize: 22, 
    color: '#4CAF50',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  pixHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  pixIcon: {
    marginRight: 5,
    color: '#4DB6AC',
  },
  pixHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4DB6AC', 
  },
  qrCode: {
    width: 250, 
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFF',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#495057',
    lineHeight: 22, 
  },
  instructionsTitle: {
    color: '#DC3545', 
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pixCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  pixCodeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#495057',
  },
  pixCode: {
    fontSize: 14,
    color: '#6C757D',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#E9ECEF',
  },
  copyButton: {
    backgroundColor: '#3CB3F6', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  copyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 8,
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popupContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  popupText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
