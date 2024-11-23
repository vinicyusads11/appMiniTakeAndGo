import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { useRouter, useLocalSearchParams } from 'expo-router';

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
      const response = await fetch('https://appminitakeandgo.onrender.com/product', {
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
              pathname: '/(tabs)/basket',
              params: { cart: JSON.stringify(updatedCart) },
            });
          }, 500);
        } else {
          setToastMessage('Erro: Produto não encontrado no banco de dados.');
          setScanError(true);
          setTimeout(() => setToastMessage(null), 5000);
        }
      } else {
        setToastMessage('Erro: Produto não encontrado.');
        setScanError(true);
        setTimeout(() => setToastMessage(null), 5000);
      }
    } catch (error) {
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
      <Text style={styles.instructionText}>
        Aponte a câmera do seu celular para o código de barras do produto que você deseja, e ele
        será adicionado automaticamente à cesta
      </Text>

      <TouchableOpacity onPress={() => router.push('/(tabs)/home')} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar à Tela Inicial</Text>
      </TouchableOpacity>

      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['ean13'],
        }}
        style={styles.camera}
      />

      {toastMessage && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}
      {scanError && (
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            setScanned(false);
            setScanError(false);
          }}
        >
          <Text style={styles.retryButtonText}>CLIQUE AQUI PARA ESCANEAR NOVAMENTE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scanbarcode: {
    flex: 1,
    justifyContent: 'space-between',
  },
  instructionText: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
    zIndex: 10,
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
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
    zIndex: 10,
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
    zIndex: 10,
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
    zIndex: 10,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
