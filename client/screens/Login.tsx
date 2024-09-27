// TODO: estilizar e renomear este componente
import * as React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { FontSize, Color, FontFamily, Padding, Border } from '../GlobalStyles';

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

const styles = StyleSheet.create({
  seuEmailTypo: {
    fontSize: FontSize.size_sm,
    left: 22,
    textAlign: 'center',
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: 'absolute',
  },
  button1Typo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
  },
  inputPosition: {
    paddingBottom: Padding.p_xl,
    paddingRight: Padding.p_16xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_xl,
    height: 52,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: 'solid',
    borderRadius: Border.br_10xs,
    alignItems: 'center',
    flexDirection: 'row',
    width: 317,
    left: 22,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },
  placeholderTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    fontSize: FontSize.size_3xs,
    textAlign: 'center',
  },
  button1Typo: {
    fontSize: FontSize.size_base,
    textAlign: 'center',
  },
  google: {
    top: 425,
    left: 381,
    fontSize: 18,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: 'absolute',
  },
  noTemUma: {
    color: Color.colorDarkslategray,
  },
  cadastrar: {
    color: Color.colorDeepskyblue,
  },
  noTemUmaContainer: {
    marginLeft: -97,
    top: 499,
    fontSize: 12,
    textAlign: 'center',
    left: '50%',
    fontFamily: FontFamily.poppinsRegular,
    position: 'absolute',
  },
  seuEmail: {
    top: 125,
  },
  suaSenha: {
    top: 221,
  },
  loginChild: {
    top: 419,
    height: 35,
    width: 317,
    borderRadius: Border.br_xs,
    left: 22,
    position: 'absolute',
  },
  image8Icon: {
    top: 427,
    left: 38,
    width: 20,
    height: 20,
    position: 'absolute',
  },
  continuarComGoogle: {
    marginLeft: -58,
    top: 429,
    fontSize: FontSize.size_3xs,
    fontWeight: '600',
    color: Color.colorDarkslategray,
    textAlign: 'center',
    left: '50%',
    position: 'absolute',
  },
  placeholder: {
    color: Color.colorDimgray,
  },
  input: {
    top: 153,
  },
  input1: {
    top: 249,
  },
  eyeIcon: {
    height: '1.51%',
    width: '4.89%',
    top: '35.63%',
    right: '9.56%',
    bottom: '64.86%',
    left: '70.56%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  esqueciMinhaSenha: {
    top: 309,
    left: 22,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    color: Color.colorDeepskyblue,
    position: 'absolute',
  },
  button1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
  },
  button: {
    top: 356,
    backgroundColor: Color.colorDeepskyblue,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    width: 317,
    borderRadius: Border.br_xs,
    left: 22,
    position: 'absolute',
  },
  entreNaSua: {
    marginLeft: -78,
    top: 50,
    fontWeight: '700',
    fontFamily: FontFamily.poppinsBold,
    width: 155,
    left: '50%',
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: 'absolute',
  },
  login: {
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
