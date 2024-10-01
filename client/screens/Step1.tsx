import * as React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/Step1Style';

const Step1 = () => {
  return (
    <View style={styles.step1}>
      <Text style={styles.aponteACmeraContainer}>
        <Text style={styles.aponteACmera}>{`Aponte a câmera do seu celular, escaneie o `}</Text>
        <Text style={styles.cdigoDeBarras}>código de barras</Text>
        <Text style={styles.aponteACmera}> do produto e adicione-o à cesta</Text>
      </Text>
      <Pressable style={[styles.prximo, styles.prximoPosition]} onPress={() => {}}>
        <Text style={[styles.prximo1, styles.prximo1Typo]}>PRÓXIMO</Text>
      </Pressable>
      <Pressable style={[styles.voltar, styles.prximoPosition]} onPress={() => {}}>
        <Text style={[styles.voltar1, styles.prximo1Typo]}>VOLTAR</Text>
      </Pressable>
      <Pressable style={styles.crossblue} onPress={() => {}}>
        <Image style={styles.icon} contentFit="cover" source={require('../assets/crossblue.png')} />
      </Pressable>
      <Image
        style={styles.girlscanqrcodeIcon}
        contentFit="cover"
        source={require('../assets/girlscanqrcode.png')}
      />
      <Image style={styles.bola1} contentFit="cover" source={require('../assets/ellipse-10.png')} />
      <Text style={styles.text}>1</Text>
      <Image
        style={[styles.bola2, styles.step1Layout]}
        contentFit="cover"
        source={require('../assets/ellipse-11.png')}
      />
      <Image
        style={[styles.bola3, styles.step1Layout]}
        contentFit="cover"
        source={require('../assets/ellipse-12.png')}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.bola1, styles.lineViewLayout]} />
      <Image
        style={styles.image51Icon}
        contentFit="cover"
        source={require('../assets/leiteicon.png')}
      />
    </View>
  );
};

export default Step1;
