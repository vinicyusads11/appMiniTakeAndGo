import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/WelcomeStyle';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.welcome}>
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

      <TouchableOpacity style={styles.skipButton} onPress={() => router.push('../(tabs)/home')}>
        <Text style={styles.skipText}>Pular Tutorial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('../screens/Step1')}>
        <Text style={styles.prximoTexto}>PRÓXIMO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
