import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/RegisterStyle';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Verifica se os campos estão preenchidos
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Aqui você pode chamar a função para registrar o usuário
    Alert.alert('Sucesso', 'Conta criada com sucesso!');
  };

  return (
    <View style={styles.register}>
      <TextInput
        style={[styles.input, styles.inputPosition]}
        placeholder="Digite aqui seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input1, styles.inputPosition]}
        placeholder="Digite aqui seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input2, styles.inputPosition]}
        placeholder="Crie uma senha de no mínimo 8 caracteres"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input3, styles.inputPosition]}
        placeholder="Repita sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require('../assets/eyeicon.png')}
      />
      <Pressable style={[styles.button, styles.buttonLayout]} onPress={handleRegister}>
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
