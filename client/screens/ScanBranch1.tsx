import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/ScanBranch1Style';

const ScanBranch1 = () => {
  return (
    <View style={styles.scanbranch}>
      <Image
        style={styles.scanbranchChild}
        contentFit="cover"
        source={require('../assets/vector-36.png')}
      />
      <Text style={[styles.aponteParaOContainer, styles.button1Typo]}>
        <Text style={styles.aponteParaO}>
          <Text style={styles.aponteParaO1}>Aponte para o</Text>
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={styles.qrCode}>{`QR Code `}</Text>
        <Text style={styles.queEstLocalizado}>que estÃ¡ localizado na porta do mercado</Text>
      </Text>
      <Image
        style={styles.unsplashh0vxgz5tyxaIcon}
        contentFit="cover"
        source={require('../assets/unsplashfundo.png')}
      />
      <View style={styles.scanbranchInner}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require('../assets/qrcodeiconpreto.png')}
          />
        </View>
      </View>
      <View style={styles.scanbranchItem} />
      <View style={[styles.lineView, styles.scanbranchChildLayout1]} />
      <View style={[styles.scanbranchChild1, styles.scanbranchChildLayout]} />
      <Image style={styles.lineIcon} contentFit="cover" source={require('../assets/line-24.png')} />
      <Image
        style={[styles.scanbranchChild2, styles.buttonLayout]}
        contentFit="cover"
        source={require('../assets/line-25.png')}
      />
      <View style={[styles.scanbranchChild3, styles.scanbranchChildLayout]} />
      <View style={[styles.scanbranchChild4, styles.scanbranchChildLayout1]} />
      <View style={[styles.scanbranchChild5, styles.scanbranchChildPosition]} />
      <View style={[styles.scanbranchChild6, styles.scanbranchChildPosition]} />
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.button1, styles.textTypo]}>Voltar</Text>
      </View>
    </View>
  );
};

export default ScanBranch1;
