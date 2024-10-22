import * as React from 'react';
import { Image } from 'expo-image';
import { Button, StyleSheet, TouchableOpacity, Pressable, Text, View } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import styles from '../../styles/ScanBarCodeStyle';
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
        <Button onPress={requestPermission} title="Condeder permissão" />
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
    justifyContent: 'space-between', 
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
    alignItems: 'center', 
    marginVertical: 10,   
    marginBottom: 40,    
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

export default ScanBarCode;
