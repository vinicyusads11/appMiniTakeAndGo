import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import styles from '../../styles/ScanBarCodeStyles';

export default function ScanBarCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [scanError, setScanError] = useState(false);
  const router = useRouter();
  const { cart: existingCart } = useLocalSearchParams();

  useEffect(() => {
    if (existingCart) {
      setCart(JSON.parse(existingCart));
    }
  }, [existingCart]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarcodeScanned = async ({ data }) => {
    setScanned(true);
    setScanError(false);
    console.log('Código de barras escaneado:', data);

    try {
      const response = await fetch('http://192.168.1.2:5000/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ barcode: data }),
      });

      if (response.ok) {
        const product = await response.json();
        if (product) {
          const updatedCart = [...cart, { ...product, quantity: 1 }];
          setCart(updatedCart);

          setTimeout(() => {
            router.push({
              pathname: '../(tabs)/basket',
              params: { cart: JSON.stringify(updatedCart) },
            });
          }, 500);
        } else {
          // Exibe a mensagem de erro por 5 segundos
          setToastMessage('Erro: Produto não encontrado no banco de dados.');
          setScanError(true);
          setTimeout(() => setToastMessage(null), 5000);
        }
      } else {
        // Exibe a mensagem de erro por 5 segundos
        setToastMessage('Erro: Produto não encontrado.');
        setScanError(true);
        setTimeout(() => setToastMessage(null), 5000);
      }
    } catch (error) {
      // Exibe a mensagem de erro por 5 segundos
      setToastMessage('Erro: Falha ao buscar produto.');
      setScanError(true);
      setTimeout(() => setToastMessage(null), 5000);
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando acesso à câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.scanbarcode}>
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Image
          style={styles.scanbarcodeChild}
          contentFit="cover"
          source={require('../../assets/vector-36.png')}
        />
      </TouchableOpacity>
      <Text style={[styles.aponteParaOContainer, styles.button1Typo]}>
        <Text style={styles.aponteParaO}>
          <Text style={styles.aponteParaO1}>Aponte para o</Text>
        </Text>
        <Text style={styles.cdigoDeBarras}> código de barras </Text>
        <Text style={styles.aponteParaO}>
          <Text style={styles.aponteParaO1}>do produto</Text>
        </Text>
      </Text>
      <Text style={[styles.restaurantName, styles.restaurantNamePosition]}>
        Não leve os produtos sem pagar
      </Text>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: [
            'qr',
            'ean13',
            'ean8',
            'upc_a',
            'upc_e',
            'code128',
            'code39',
            'code93',
            'pdf417',
            'itf14',
          ],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {toastMessage && (
        <View style={localStyles.toast}>
          <Text style={localStyles.toastText}>{toastMessage}</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')} style={localStyles.backButton}>
        <Text style={localStyles.backButtonText}>Voltar à Tela Inicial</Text>
      </TouchableOpacity>
      {scanError && (
        <TouchableOpacity
          style={localStyles.retryButton}
          onPress={() => {
            setScanned(false);
            setScanError(false);
          }}
        >
          <Text style={localStyles.retryButtonText}>CLIQUE AQUI PARA ESCANEAR NOVAMENTE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  scanbarcode: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backButton: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    transform: [{ translateX: -90 }],
    backgroundColor: '#3cb3f6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toast: {
    position: 'absolute',
    bottom: 150,
    left: '10%',
    right: '10%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center',
    opacity: 0.9,
  },
  toastText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  retryButton: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: [{ translateX: -150 }],
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
