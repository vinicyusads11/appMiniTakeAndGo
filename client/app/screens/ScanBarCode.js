import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import styles from '../../styles/ScanBarCodeStyles';

export default function ScanBarCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código de barra com o tipo ${type} e código ${data} foi escaneado com sucesso!`);
  };

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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title="Clique aqui para escanear novamente" onPress={() => setScanned(false)} />
      )}

      {/* Botão Voltar fixado na parte inferior da tela */}
      <Pressable onPress={() => router.push('/(tabs)/home')} style={localStyles.backButtonContainer}>
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
