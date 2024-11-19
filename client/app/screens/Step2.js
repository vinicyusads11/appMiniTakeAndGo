import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import ProgressBar from '../../components/ProgressBar';

const Step2 = () => {
  const router = useRouter();
  return (
    <View style={styles.step2}>
      <ProgressBar step={2} />

      <Text style={styles.confiraTodosOs}>
        Confira todos os produtos, confirme e finalize sua compra
      </Text>

      <TouchableOpacity style={styles.skipButton} onPress={() => router.push('../(tabs)/home')}>
        <Text style={styles.skipText}>Pular Tutorial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => router.push('../screens/Step1')}>
        <Text style={styles.voltarTexto}>VOLTAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('../screens/Step3')}>
        <Text style={styles.prximoTexto}>PRÓXIMO</Text>
      </TouchableOpacity>

      <Image
        style={styles.step2Child}
        contentFit="cover"
        source={require('../../assets/listacomprascestaicon.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  step2: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  step2Child: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },

  confiraTodosOs: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    width: '80%',
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

  // Botão PRÓXIMO (à direita)
  prximo: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prximoTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Botão VOLTAR (à esquerda)
  voltar: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  voltarTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Etapas de progresso
  bola1: { left: 80, width: 30, height: 30, top: 96, position: 'absolute' },
  bola2: { left: 180 },
  bola3: { left: 280 },
  lineView: { left: 150 },
  lineViewLayout: {
    height: 1,
    width: 36,
    borderTopWidth: 1,
    borderColor: '#3cb3f6',
    borderStyle: 'solid',
    top: 111,
    position: 'absolute',
  },

  text: {
    left: 110,
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    top: 99,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default Step2;
