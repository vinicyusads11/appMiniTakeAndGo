import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import ProgressBar from '../../components/ProgressBar';

const Step1 = () => {
  const router = useRouter();
  return (
    <View style={styles.step1}>
      <ProgressBar step={1} />

      <Text style={styles.aponteACmeraContainer}>
        <Text style={styles.aponteACmera}>
          Aponte a câmera do seu celular para o{' '}
          <Text style={styles.codigoDeBarras}>código de barras</Text> do produto e ele será
          adicionado automaticamente à cesta.
        </Text>
      </Text>

      <TouchableOpacity style={styles.skipButton} onPress={() => router.push('../(tabs)/home')}>
        <Text style={styles.skipText}>Pular Tutorial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('../screens/Step2')}>
        <Text style={styles.prximoTexto}>PRÓXIMO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => router.push('../screens/Welcome')}>
        <Text style={styles.voltarTexto}>VOLTAR</Text>
      </TouchableOpacity>

      <Image
        style={styles.girlscanqrcodeIcon}
        contentFit="cover"
        source={require('../../assets/cellscanbarcode.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Contêiner da tela
  step1: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  // Texto de instrução principal
  aponteACmeraContainer: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fffffff',
    width: '80%',
    marginBottom: 30,
  },

  codigoDeBarras: {
    color: '#3cb3f6',
    fontWeight: 'bold',
  },

  // Imagem de instrução principal
  girlscanqrcodeIcon: {
    width: 200,
    height: 185,
    marginBottom: 40,
  },

  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },

  skipText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  prximo: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  prximoTexto: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  voltar: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  voltarTexto: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Step1;
