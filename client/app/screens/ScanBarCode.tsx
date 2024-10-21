import * as React from 'react';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import styles from '../../styles/ScanBarCodeStyle';
import { useRouter } from 'expo-router';

const ScanBarCode = () => {
  const router = useRouter();
  return (
    <View style={styles.scanbarcode}>
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
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={styles.cdigoDeBarras}>código de barras</Text>
        <Text style={styles.aponteParaO}>
          <Text style={styles.textTypo}>{` `}</Text>
          <Text style={styles.aponteParaO1}>do produto</Text>
        </Text>
      </Text>
      <Image
        style={styles.unsplashh0vxgz5tyxaIcon}
        contentFit="cover"
        source={require('../../assets/unsplashfundo.png')}
      />
      <View style={styles.scanbarcodeInner}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.image60Icon}
            contentFit="cover"
            source={require('../../assets/image-60.png')}
          />
        </View>
      </View>
      <View style={styles.scanbarcodeItem} />
      <View style={[styles.lineView, styles.scanbarcodeChildLayout1]} />
      <View style={[styles.scanbarcodeChild1, styles.scanbarcodeChildLayout]} />
      <Image style={styles.lineIcon} contentFit="cover" source={require('../../assets/line-24.png')} />
      <Image
        style={[styles.scanbarcodeChild2, styles.buttonLayout]}
        contentFit="cover"
        source={require('../../assets/line-25.png')}
      />
      <View style={[styles.scanbarcodeChild3, styles.scanbarcodeChildLayout]} />
      <View style={[styles.scanbarcodeChild4, styles.scanbarcodeChildLayout1]} />
      <View style={[styles.scanbarcodeChild5, styles.scanbarcodeChildPosition]} />
      <View style={[styles.scanbarcodeChild6, styles.scanbarcodeChildPosition]} />
      <Pressable onPress={() => router.push('/(tabs)/home')}>
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.button1, styles.textTypo]}>Voltar</Text>
      </View>
      </Pressable>
      <Text style={[styles.restaurantName, styles.restaurantNamePosition]}>
        Não leve os produtos sem pagar
      </Text>
    </View>
  );
};

export default ScanBarCode;
