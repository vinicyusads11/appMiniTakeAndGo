import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/Step2Style';
import { useRouter } from 'expo-router';
import ProgressBar from '../../components/ProgressBar';

const Step2 = () => {
  const router = useRouter();
  return (
    <View style={styles.step2}>
      <ProgressBar step={2} />

      <Text style={styles.confiraTodosOs}>
        Confira todos os produtos, confirme e finalize sua compra
      </Text>

      <TouchableOpacity style={styles.skipButton} onPress={() => router.push('../(tabs)/home')}>
        <Text style={styles.skipText}>Pular Tutorial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => router.push('../screens/Step1')}>
        <Text style={styles.voltarTexto}>VOLTAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('../screens/Step3')}>
        <Text style={styles.prximoTexto}>PRÓXIMO</Text>
      </TouchableOpacity>

      <Image
        style={styles.step2Child}
        contentFit="cover"
        source={require('../../assets/listacomprascestaicon.png')}
      />
    </View>
  );
};

export default Step2;
