import * as React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/LoginStyle';

const Login = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.google}>Google</Text>
      <Text style={styles.noTemUmaContainer}>
        <Text style={styles.noTemUma}>{`Não tem uma conta? `}</Text>
        <Text style={styles.cadastrar}>Cadastrar</Text>
      </Text>
      <Text style={[styles.seuEmail, styles.seuEmailTypo]}>Seu email</Text>
      <Text style={[styles.suaSenha, styles.seuEmailTypo]}>Sua senha</Text>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require('../assets/rectangle-3.png')}
      />
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require('../assets/google.png')}
      />
      <Text style={[styles.continuarComGoogle, styles.button1Typo1]}>Continuar com google</Text>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.placeholder, styles.placeholderTypo]}>Digite aqui seu e-mail</Text>
      </View>
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={[styles.placeholder, styles.placeholderTypo]}>Digite aqui sua senha</Text>
      </View>
      <Image style={styles.eyeIcon} contentFit="cover" source={require('../assets/eyeicon.png')} />
      <Text style={[styles.esqueciMinhaSenha, styles.placeholderTypo]}>Esqueci minha senha</Text>
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={[styles.button1, styles.button1Typo]}>Entrar</Text>
      </Pressable>
      <Text style={[styles.entreNaSua, styles.button1Typo]}>Entre na sua conta</Text>
    </View>
  );
};

export default Login;
