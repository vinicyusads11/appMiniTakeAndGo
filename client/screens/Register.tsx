// TODO: estilizar e renomear este componente
import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

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
          <Text style={styles.placeholder}>
            Crie uma senha de no mínimo 8 caracteres
          </Text>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/eyeicon.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => {}}
      >
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
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/google.png")}
      />
      <Text style={[styles.continuarComGoogle, styles.comTypo]}>
        Continuar com google
      </Text>
      <Text style={[styles.qualOSeu, styles.qualClr]}>Qual o seu nome?</Text>
      <Text style={[styles.qualOSeu1, styles.qualClr]}>Qual o seu email?</Text>
      <Text style={[styles.crieUmaSenha, styles.qualClr]}>Crie uma senha</Text>
      <View style={[styles.input3, styles.inputPosition]}>
        <Text style={styles.placeholder}>Repita sua senha</Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/eyeicon.png")}
      />
      <Text style={[styles.confirmarSenha, styles.qualClr]}>
        Confirmar senha
      </Text>
      <View style={[styles.registerItem, styles.registerPosition]} />
      <Image
        style={[styles.registerInner, styles.registerPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <Text
        style={[styles.crieUmaConta, styles.qualClr]}
      >{`Crie uma conta  `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    paddingBottom: Padding.p_xl,
    paddingRight: Padding.p_16xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderRadius: Border.br_10xs,
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 317,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupIconLayout: {
    maxWidth: "100%",
    width: "4.89%",
    height: "1.51%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonLayout: {
    borderRadius: Border.br_xs,
    width: 317,
    position: "absolute",
  },
  comTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  qualClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  registerPosition: {
    top: 560,
    position: "absolute",
  },
  placeholder: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDimgray,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  input: {
    top: 145,
    left: 22,
  },
  input1: {
    top: 227,
    left: 22,
  },
  input2: {
    top: 0,
    left: 0,
  },
  inputWrapper: {
    top: 307,
    height: 40,
    width: 317,
    left: 22,
    position: "absolute",
  },
  groupIcon: {
    top: "39.88%",
    right: "7.89%",
    bottom: "58.61%",
    left: "70.22%",
    maxHeight: "100%",
  },
  button1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
  },
  button: {
    marginLeft: -158,
    top: 482,
    backgroundColor: Color.colorDeepskyblue,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 15,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    height: 40,
  },
  ouEntreCom: {
    marginLeft: -31,
    top: 553,
    fontSize: 9,
    color: Color.colorDarkslategray,
    left: "50%",
    position: "absolute",
  },
  jTemConta: {
    color: Color.colorDarkslategray,
  },
  entrar: {
    color: Color.colorDeepskyblue,
  },
  text: {
    marginLeft: -62,
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
  jTemContaContainer: {
    top: 689,
    left: "50%",
    position: "absolute",
  },
  registerChild: {
    top: 597,
    height: 35,
    left: 22,
  },
  image7Icon: {
    top: 605,
    left: 60,
    width: 20,
    height: 20,
    position: "absolute",
  },
  continuarComGoogle: {
    top: 607,
    left: 122,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  qualOSeu: {
    top: 121,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 22,
  },
  qualOSeu1: {
    top: 203,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 22,
  },
  crieUmaSenha: {
    top: 282,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 22,
  },
  input3: {
    top: 388,
    left: 22,
  },
  groupIcon1: {
    top: "50.25%",
    right: "8.72%",
    bottom: "48.24%",
    left: "86.39%",
    maxHeight: "100%",
  },
  confirmarSenha: {
    top: 362,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 22,
  },
  registerItem: {
    left: 26,
    borderColor: "#b1b1b1",
    borderTopWidth: 1,
    width: 97,
    height: 1,
    borderStyle: "solid",
    top: 560,
  },
  registerInner: {
    left: 237,
    width: 96,
    maxHeight: "100%",
  },
  crieUmaConta: {
    marginLeft: -135,
    top: 44,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 269,
    fontSize: FontSize.size_base,
    left: "50%",
  },
  register: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Register;