import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/Step1Style';
import { useRouter } from 'expo-router';
import ProgressBar from '../../components/ProgressBar';

const Step1 = () => {
  const router = useRouter();
  return (
    <View style={styles.step1}>
      <ProgressBar step={1} />

      <Text style={styles.aponteACmeraContainer}>
        <Text style={styles.aponteACmera}>{`Aponte a câmera do seu celular, escaneie o `}</Text>
        <Text style={styles.cdigoDeBarras}>código de barras</Text>
        <Text style={styles.aponteACmera}>
          {' '}
          do produto e ele será adicionado automaticamente a cesta
        </Text>
      </Text>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('../screens/Step2')}>
        <Text style={styles.prximoTexto}>PRÓXIMO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => router.push('../screens/Welcome')}>
        <Text style={styles.voltarTexto}>VOLTAR</Text>
      </TouchableOpacity>

      <Image
        style={styles.girlscanqrcodeIcon}
        contentFit="cover"
        source={require('../../assets/girlscanqrcode.png')}
      />
    </View>
  );
};

export default Step1;
