import * as React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/RegisterStyle';

const Register = () => {
  return (
    <View style={styles.register}>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={styles.placeholder}>Digita aqui seu nome</Text>
      </View>
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={styles.placeholder}>Digite aqui seu e-mail</Text>
      </View>
      <View style={styles.inputWrapper}>
        <View style={[styles.input2, styles.inputPosition]}>
          <Text style={styles.placeholder}>Crie uma senha de no mínimo 8 caracteres</Text>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require('../assets/eyeicon.png')}
      />
      <Pressable style={[styles.button, styles.buttonLayout]} onPress={() => {}}>
        <Text style={[styles.button1, styles.comTypo]}>Criar conta</Text>
      </Pressable>
      <Text style={[styles.ouEntreCom, styles.comTypo]}>Ou entre com</Text>
      <Pressable style={styles.jTemContaContainer} onPress={() => {}}>
        <Text style={styles.text}>
          <Text style={styles.jTemConta}>{`Já tem conta? `}</Text>
          <Text style={styles.entrar}>Entrar</Text>
        </Text>
      </Pressable>
      <Image
        style={[styles.registerChild, styles.buttonLayout]}
        contentFit="cover"
        source={require('../assets/rectangle-2.png')}
      />
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require('../assets/google.png')}
      />
      <Text style={[styles.continuarComGoogle, styles.comTypo]}>Continuar com google</Text>
      <Text style={[styles.qualOSeu, styles.qualClr]}>Qual o seu nome?</Text>
      <Text style={[styles.qualOSeu1, styles.qualClr]}>Qual o seu email?</Text>
      <Text style={[styles.crieUmaSenha, styles.qualClr]}>Crie uma senha</Text>
      <View style={[styles.input3, styles.inputPosition]}>
        <Text style={styles.placeholder}>Repita sua senha</Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require('../assets/eyeicon.png')}
      />
      <Text style={[styles.confirmarSenha, styles.qualClr]}>Confirmar senha</Text>
      <View style={[styles.registerItem, styles.registerPosition]} />
      <Image
        style={[styles.registerInner, styles.registerPosition]}
        contentFit="cover"
        source={require('../assets/line-9.png')}
      />
      <Text style={[styles.crieUmaConta, styles.qualClr]}>{`Crie uma conta  `}</Text>
    </View>
  );
};

export default Register;
