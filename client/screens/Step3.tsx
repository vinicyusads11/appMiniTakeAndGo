import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import styles from '../styles/Step3Style';

const Step = () => {
  return (
    <View style={styles.step3}>
      <Image
        style={[styles.step3Child, styles.step3Layout]}
        contentFit="cover"
        source={require('../assets/ellipse-10.png')}
      />
      <Text style={[styles.text, styles.textTypo]}>3</Text>
      <Image
        style={[styles.step3Item, styles.step3Layout]}
        contentFit="cover"
        source={require('../assets/ellipse-11.png')}
      />
      <Image
        style={[styles.step3Inner, styles.step3Layout]}
        contentFit="cover"
        source={require('../assets/ellipse-12.png')}
      />
      <Pressable style={styles.voltar} onPress={() => {}}>
        <Text style={[styles.voltar1, styles.text1Clr]}>VOLTAR</Text>
      </Pressable>
      <Text style={[styles.umCdigoqrCode, styles.text1Position]}>
        Um código Pix será gerado, você poderá escanear ou copiá-lo
      </Text>
      <Text style={[styles.text1, styles.text1Layout]}>{` `}</Text>
      <Text style={[styles.agoraS, styles.agoraSTypo]}>
        Agora é só pagar, retirar seus produtos e pronto!
      </Text>
      <View style={styles.button}>
        <Text style={[styles.button1, styles.textTypo]}>Crie uma conta</Text>
      </View>
      <Text style={[styles.jTenhoUma, styles.agoraSTypo]}>Já tenho uma conta</Text>
      <Pressable style={styles.crossblue} onPress={() => {}}>
        <Image style={styles.icon} contentFit="cover" source={require('../assets/crossblue.png')} />
      </Pressable>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.step3Child1, styles.lineViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.text1Position]}
        contentFit="cover"
        source={require('../assets/cestacomprasicon.png')}
      />
      <Image
        style={[styles.groupIcon, styles.step3Layout]}
        contentFit="cover"
        source={require('../assets/qrcodeicon.png')}
      />
    </View>
  );
};

export default Step;
