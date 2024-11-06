import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/Step3Style';
import { useRouter } from 'expo-router';
import ProgressBar from '../../components/ProgressBar';

const Step3 = () => {
  const router = useRouter();
  return (
    <View style={styles.step3}>
      <ProgressBar step={3} />

      <Text style={styles.umCdigoqrCode}>
        Um código Pix será gerado, você poderá escanear ou copiá-lo para pagar
      </Text>

      <TouchableOpacity style={styles.voltar} onPress={() => router.push('../screens/Step2')}>
        <Text style={styles.voltarTexto}>VOLTAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.prximoTexto}>Ir às compras!</Text>
      </TouchableOpacity>

      <Image
        style={styles.cestaIcon}
        contentFit="cover"
        source={require('../../assets/cestacomprasicon.png')}
      />
      <Text style={styles.agoraS}>Aí é só pagar, levar seus produtos e pronto!</Text>
    </View>
  );
};

export default Step3;
