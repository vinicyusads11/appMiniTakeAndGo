import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';
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
        Para iniciar sua compra, clique no ícone de
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

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Estilo para o logotipo na parte superior
  logotipopretosemfundoIcon: {
    marginTop: 40,
    width: 145,
    height: 202,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  // Texto de instrução no meio
  iniciarTexto: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginLeft: 50,
    marginRight: 50,
  },
  cdigoDeBarras: {
    color: '#00BFFF', // cor equivalente a Color.colorDeepskyblue
    fontWeight: '700',
  },
  // Botão do código de barras logo abaixo do texto de instrução
  barcodeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  // Texto na parte inferior da tela
  tutorialTexto: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: '400', // Regular weight
  },
  cliqueAqui: {
    color: '#00BFFF', // cor equivalente a Color.colorDeepskyblue
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Home;
