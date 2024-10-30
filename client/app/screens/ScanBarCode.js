import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import styles from '../../styles/ScanBarCodeStyles';

export default function ScanBarCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cart, setCart] = useState([]); // Estado do carrinho
  const router = useRouter();
  const { cart: existingCart } = useLocalSearchParams();

  // Carrega o carrinho existente ao retornar para a tela de escaneamento
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
          Alert.alert(
            'Produto adicionado!',
            `${product.name}, com o valor de R$ ${product.price.toFixed(
              2
            )}, foi adicionado ao carrinho!`
          );

          // Adiciona o produto ao carrinho e redireciona para a tela do carrinho
          const updatedCart = [...cart, { ...product, quantity: 1 }]; // Adiciona o produto com quantidade inicial de 1
          setCart(updatedCart);

          // Redireciona para a tela de carrinho após um pequeno atraso para exibir o Alert
          setTimeout(() => {
            router.push({
              pathname: '/screens/Cart',
              params: { cart: JSON.stringify(updatedCart) }
            });
          }, 500); // Atraso para exibir o alert antes do redirecionamento
        } else {
          Alert.alert('Erro', 'Produto não encontrado no banco de dados.');
        }
      } else {
        Alert.alert('Erro', 'Produto não encontrado.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar produto.');
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando acesso a camera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  return (
    <View style={styles.scanbarcode}>
      <Pressable onPress={() => router.push('/(tabs)/home')}>
        <Image
          style={styles.scanbarcodeChild}
          contentFit="cover"
          source={require('../../assets/vector-36.png')}
        />
      </Pressable>
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
            'qr', // QR Code (Quick Response Code)
            'ean13', // EAN-13 (European Article Number 13) - Comum em produtos de mercado
            'ean8', // EAN-8 (European Article Number 8) - Versão reduzida do EAN-13
            'upc_a', // UPC-A (Universal Product Code A) - Comum nos EUA e Canadá
            'upc_e', // UPC-E (Universal Product Code E) - Versão compacta do UPC-A
            'code128', // Code 128 - Usado em transporte, logística e etiquetas de remessa
            'code39', // Code 39 - Código alfanumérico usado em indústrias e inventário
            'code93', // Code 93 - Versão compacta e mais eficiente do Code 39
            'pdf417', // PDF417 - Código bidimensional, usado em documentos como carteiras de motorista
            'itf14', // ITF-14 (Interleaved 2 of 5) - Usado para identificar embalagens e caixas no comércio
          ],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Clique aqui para escanear novamente'} onPress={() => setScanned(false)} />
      )}
      <Pressable
        onPress={() => router.push('/(tabs)/home')}
        style={localStyles.backButtonContainer}
      >
        <View style={localStyles.backButton}>
          <Text style={localStyles.backButtonText}>Voltar</Text>
        </View>
      </Pressable>
    </View>
  );
}

const localStyles = StyleSheet.create({
  scanbarcode: {
    flex: 1,
    justifyContent: 'space-between',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'black',
    fontSize: 16,
  },
  cameraContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '30%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3cb3f6',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  backButtonContainer: {
    position: 'absolute', // Para fixar o botão
    bottom: 20, // Define a distância da parte inferior
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#3cb3f6',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
