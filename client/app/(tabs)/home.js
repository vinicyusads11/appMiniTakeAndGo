// TODO: estilizar e renomear este componente
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '@/styles/HomeStyle';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.home}>
      <Text style={[styles.desejaVerOContainer, styles.containerPosition]}>
        <Text style={styles.desejaVerOTutoralDeCompra}>
          <Text style={styles.desejaVerO}>Deseja ver o tutoral de compra novamente? </Text>
        </Text>
        <Pressable onPress={() => router.push('../screens/Step1')}>
          <Text style={[styles.cliqueAqui, styles.cliqueAquiTypo]}>Clique aqui</Text>
        </Pressable>
      </Text>
      <Text style={[styles.paraIniciarSuaContainer, styles.containerPosition]}>
        <Text style={styles.desejaVerOTutoralDeCompra}>
          <Text style={styles.desejaVerO}>Para iniciar sua compra, clique no ícone do</Text>
        </Text>
        <Text style={styles.cdigoDeBarras}>
          <Text style={styles.cliqueAquiTypo}> código de barras </Text>
        </Text>
        <Text style={styles.abaixo}>abaixo</Text>
      </Text>
      <Pressable onPress={() => router.push('../screens/ScanBarCode')}>
        <Image
          style={[styles.homeChild, styles.homeChildPosition]}
          contentFit="cover"
          source={require('../../assets/ellipse-138.png')}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require('../../assets/vector.png')}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require('../../assets/group.png')}
      />
      <Image
        style={[styles.logotipopretosemfundoIcon, styles.homeChildPosition]}
        contentFit="cover"
        source={require('../../assets/logotipopretosemfundo.png')}
      />
    </View>
  );
};

export default Home;
