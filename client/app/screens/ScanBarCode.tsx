import * as React from 'react';
import { Image } from 'expo-image';
import { Button, StyleSheet, TouchableOpacity, Pressable, Text, View } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import styles from '../../styles/ScanBarCodeStyle'; // Certifique-se de que este arquivo contém os estilos apropriados
import { useState } from 'react';
import { useRouter } from 'expo-router';

const ScanBarCode = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={localStyles.container}>
        <Text style={localStyles.message}>Precisamos de sua permissão para acessar a câmera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={localStyles.scanbarcode}>
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
      <View style={localStyles.cameraContainer}>
        <CameraView style={localStyles.camera} facing={facing}>
          <View>
            <TouchableOpacity style={localStyles.button} onPress={toggleCameraFacing}>
              <Text style={localStyles.buttonText}>Girar a Câmera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
      {/* Botão Voltar na parte inferior */}
      <Pressable onPress={() => router.push('/(tabs)/home')} style={localStyles.backButtonContainer}>
        <View style={localStyles.backButton}>
          <Text style={localStyles.backButtonText}>Voltar</Text>
        </View>
      </Pressable>
      <Text style={[styles.restaurantName, styles.restaurantNamePosition]}>
        Não leve os produtos sem pagar
      </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  scanbarcode: {
    flex: 1,
    justifyContent: 'space-between', // Distribui espaço entre os elementos
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'black',
    fontSize: 16,
  },
  cameraContainer: {
    width: '100%',
    height: 200, // altura da câmera
    justifyContent: 'flex-end', // posição na parte inferior
    alignItems: 'center', // centraliza horizontalmente
  },
  camera: {
    width: '100%',
    height: '100%', // ocupa todo o espaço da câmera
  },
  button: {
    width: '30%', // largura do botão reduzida
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3cb3f6', // cor do botão
    borderRadius: 5,
    marginTop: 10, // espaçamento entre o botão e a câmera
  },
  buttonText: {
    color: 'white', // cor do texto do botão
  },
  backButtonContainer: {
    alignItems: 'center', // Centraliza o botão horizontalmente
    marginVertical: 10,   // Adiciona margem vertical para subir o botão
    marginBottom: 40,     // Ajusta a margem inferior para controlar a posição
  },
  backButton: {
    backgroundColor: '#3cb3f6', // cor azul do botão "Voltar"
    padding: 10,               // Reduz o padding para diminuir a altura do botão
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',              // Reduz a largura do botão
    
  },
  backButtonText: {
    color: 'white', // cor do texto do botão "Voltar"
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScanBarCode;
