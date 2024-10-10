import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import styles from '../styles/Step2Style';
import { useRouter } from 'expo-router';

const Step2 = () => {
  const router = useRouter();
  return (
    <View style={styles.step2}>
      <Image
        style={styles.step2Child}
        contentFit="cover"
        source={require('../assets/listacomprascestaicon.png')}
      />
      <Pressable style={styles.voltar} onPress={() => router.push('/Step1')}>
        <Text style={[styles.voltar1, styles.voltar1Typo]}>VOLTAR</Text>
      </Pressable>
      <Pressable style={styles.crossblue} onPress={() => router.push('/Register')}>
        <Image style={styles.icon} contentFit="cover" source={require('../assets/crossblue.png')} />
      </Pressable>
      <Image
        style={styles.step2Item}
        contentFit="cover"
        source={require('../assets/ellipse-10.png')}
      />
      <Image
        style={[styles.step2Inner, styles.step2InnerLayout]}
        contentFit="cover"
        source={require('../assets/ellipse-11.png')}
      />
      <Image
        style={[styles.ellipseIcon, styles.step2InnerLayout]}
        contentFit="cover"
        source={require('../assets/ellipse-12.png')}
      />
      <Text style={styles.text}>2</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.step2Child1, styles.lineViewLayout]} />
      <Pressable style={styles.prximo} onPress={() => router.push('/Step3')}>
        <Text style={[styles.prximo1, styles.voltar1Typo]}>PRÓXIMO</Text>
      </Pressable>
      <Text style={styles.confiraTodosOs}>Confira todos os produtos e finalize seu pedido</Text>
    </View>
  );
};

export default Step2;
