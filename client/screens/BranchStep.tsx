import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/BranchStepStyle';

const BranchStep = () => {
  return (
    <View style={styles.branchstep}>
      <Text style={[styles.identifiqueAFilial, styles.filialFlexBox]}>Identifique a filial</Text>
      <View style={styles.branchstepChild} />
      <Text style={[styles.acessarFilialVia, styles.umCdigoqrCodeTypo]}>
        Acessar filial via QR Code
      </Text>
      <Image
        style={styles.branchstepItem}
        contentFit="cover"
        source={require('../assets/qrcodeicon.png')}
      />
      <Text
        style={[styles.umCdigoqrCode, styles.containerFlexBox]}
      >{`Pronto! Sua conta já foi criada. `}</Text>
      <Text style={[styles.agoraPrecisamosIdentificarContainer, styles.containerFlexBox]}>
        <Text style={styles.agoraPrecisamosIdentificarE}>
          <Text
            style={[styles.agoraPrecisamosIdentificar, styles.textTypo]}
          >{`Agora precisamos identificar em qual filial da `}</Text>
          <Text style={[styles.mini, styles.miniTypo]}>MINI</Text>
          <Text style={[styles.agoraPrecisamosIdentificar, styles.textTypo]}>{` você está! 
`}</Text>
        </Text>
        <Text style={[styles.agoraPrecisamosIdentificar, styles.textTypo]}>
          <Text style={styles.blankLine1}> </Text>
        </Text>
      </Text>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require('../assets/logominiredondafundopreto.png')}
      />
      <Text style={[styles.porFavorAponteContainer, styles.containerFlexBox]}>
        <Text style={styles.porFavorAponteSuaCmeraE}>
          <Text style={styles.porFavorAponte}>Por favor, aponte sua câmera e escaneie o</Text>
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={[styles.mini, styles.miniTypo]}>QR CODE</Text>
        <Text style={styles.porFavorAponteSuaCmeraE}>
          <Text style={styles.textTypo}>{` `}</Text>
          <Text style={styles.porFavorAponte}>
            na entrada do mercado onde pretende fazer suas compras, para que possamos identificar a
            filial.
          </Text>
        </Text>
      </Text>
    </View>
  );
};

export default BranchStep;
