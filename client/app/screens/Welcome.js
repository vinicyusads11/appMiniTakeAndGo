import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/WelcomeStyle';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.welcome}>
      <Text style={[styles.bemVindoAMini, styles.botaoProximo]}>Bem-vindo a MINI</Text>
      <Text style={[styles.suaNovaForma, styles.sigaAquiComTypo]}>
        Sua nova forma de fazer compras
      </Text>
      <Text style={[styles.sigaAquiCom, styles.sigaAquiComTypo]}>
        Siga aqui com nosso tutorial para comprar os seus produtos
      </Text>
      <Pressable style={styles.prximo} onPress={() => router.push('../screens/Step1')}>
        <Text style={[styles.prximo1, styles.botaoProximo]}>PRÓXIMO</Text>
      </Pressable>
      <Image
        style={[styles.logotipoPreto, styles.bemVindoAMiniPosition]}
        contentFit="cover"
        source={require('../../assets/logopretosemfundo.png')}
      />
    </View>
  );
};

export default Welcome;
