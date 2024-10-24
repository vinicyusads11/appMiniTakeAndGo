import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    // Enviar o código de barras ao servidor
    try {
      const response = await fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ barcode: data })
      });

      const product = await response.json();

      if (response.status === 200) {
        // Adicionar o produto ao carrinho
        setCart((prevCart) => [...prevCart, product]);
        Alert.alert('Produto adicionado', `${product.name} foi adicionado ao carrinho!`);
      } else {
        Alert.alert('Erro', 'Produto não encontrado.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar produto.');
    }
  };

  if (hasPermission === null) {
    return <Text> Requesting for Camera Permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No Acess to Camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title='Tap to Scan Again' onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
