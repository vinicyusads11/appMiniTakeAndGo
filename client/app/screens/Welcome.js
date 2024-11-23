import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.welcome}>
      <TouchableOpacity style={styles.skipButton} onPress={() => router.push('../(tabs)/home')}>
        <Text style={styles.skipText}>Pular Tutorial</Text>
      </TouchableOpacity>

      <Image
        style={styles.logotipoPreto}
        contentFit="cover"
        source={require('../../assets/logopretosemfundo.png')}
      />
      <Text style={styles.bemVindoAMini}>Bem-vindo à MINI</Text>
      <Text style={styles.suaNovaForma}>Sua nova forma de fazer compras!</Text>
      <Text style={styles.sigaAquiCom}>
        Siga aqui com nosso passo a passo completo para a compra de seus produtos
      </Text>

      <TouchableOpacity
        style={styles.prximo}
        onPress={() => router.push('../screens/Step1')}
      >
        <Text style={styles.prximoTexto}>PRÓXIMO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  logotipoPreto: {
    width: 200,
    height: 280,
    marginBottom: 20,
  },

  bemVindoAMini: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3cb3f6',
    textAlign: 'center',
    marginBottom: 10,
  },

  suaNovaForma: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },

  sigaAquiCom: {
    fontSize: 18,
    color: '#3cb3f6',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    marginBottom: 20,
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
});

export default Welcome;
