import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';
import styles from '@/styles/HomeStyle';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.home}>
      <Image
        style={styles.logotipopretosemfundoIcon}
        contentFit="cover"
        source={require('../../assets/logotipopretosemfundo.png')}
      />

      <Text style={styles.iniciarTexto}>
        Para iniciar sua compra, clique no ícone do
        <Text style={styles.cdigoDeBarras}> CÓDIGO DE BARRAS </Text>
        abaixo
      </Text>

      <TouchableOpacity
        onPress={() => router.push('../screens/ScanBarCode')}
        style={styles.barcodeButton}
      >
        <Icon name="barcode-scan" size={180} color="#3CB3F6" />
      </TouchableOpacity>

      <Text style={styles.tutorialTexto}>
        Deseja ver o tutorial de compra novamente?
        <TouchableOpacity onPress={() => router.push('../screens/Step1')}>
          <Text style={styles.cliqueAqui}> Clique aqui</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Home;
