// TODO: estilizar e renomear este componente
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile1}>
      <View style={styles.profile1Child} />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.profile1Item}
        contentFit="cover"
        source={require("../assets/group-18153.png")}
      />
      <View style={styles.johnParent}>
        <Text style={[styles.john, styles.johnLayout]}>John</Text>
        <Text style={[styles.editeInformaesDe, styles.editeInformaesDeTypo]}>
          Edite informações de seu perfil abaixo
        </Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.nomeParent}>
          <Text style={[styles.nome, styles.nomeFlexBox]}>Nome</Text>
          <View style={styles.groupChild} />
          <Text style={[styles.johnDoe, styles.text1Typo]}>John Doe</Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>$ 1679.30</Text>
        <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Text style={[styles.johndoeexemplocom, styles.text1Typo]}>
          johndoe@exemplo.com
        </Text>
        <Text style={[styles.telefone, styles.eMailTypo]}>Telefone</Text>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text style={[styles.text1, styles.text1Typo]}>
          +55 (48) 99999-9999
        </Text>
      </View>
      <View style={[styles.button, styles.buttonBg]}>
        <Text style={styles.button1}>Salvar alterações</Text>
      </View>
      <Image
        style={[styles.profile1Inner, styles.johnLayout]}
        contentFit="cover"
        source={require("../assets/vector-36.png")}
      />
      <Text
        style={[styles.desejaExcluirSuaContainer, styles.editeInformaesDeTypo]}
      >
        <Text style={styles.desejaExcluirSuaConta}>
          <Text style={styles.desejaExcluirSua}>Deseja excluir sua conta?</Text>
          <Text style={styles.nomeTypo}>{` `}</Text>
        </Text>
        <Text style={[styles.cliqueAqui, styles.textTypo]}>Clique aqui!</Text>
      </Text>
      <View style={[styles.rectangleView, styles.buttonBg]} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-18073.png")}
      />
      <Text style={[styles.sair, styles.nomeFlexBox]}>Sair</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  johnLayout: {
    height: 20,
    position: "absolute",
  },
  editeInformaesDeTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  nomeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    color: Color.ffffff,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  eMailTypo: {
    left: "3.15%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupShadowBox: {
    height: "16.05%",
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  buttonBg: {
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  profile1Child: {
    top: 37,
    left: 127,
    borderRadius: 54,
    width: 108,
    height: 108,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  maskGroupIcon: {
    top: 46,
    left: 135,
    width: 90,
    height: 90,
    position: "absolute",
  },
  profile1Item: {
    top: 113,
    left: 167,
    width: 27,
    height: 27,
    position: "absolute",
  },
  john: {
    marginLeft: -70.5,
    top: 0,
    fontSize: 20,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    width: 140,
    textAlign: "center",
    color: Color.colorBlack,
    height: 20,
    left: "50%",
  },
  editeInformaesDe: {
    marginLeft: -144.5,
    top: 66,
    color: Color.subColor,
    fontFamily: FontFamily.poppinsRegular,
    width: 289,
  },
  johnParent: {
    marginLeft: -145,
    top: 140,
    height: 87,
    width: 289,
    left: "50%",
    position: "absolute",
  },
  nome: {
    width: "33.44%",
    left: "2.84%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  groupChild: {
    height: "65%",
    top: "35%",
    borderWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  johnDoe: {
    width: "47.95%",
    top: "55%",
    left: "6.62%",
  },
  nomeParent: {
    height: "24.69%",
    bottom: "75.31%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text: {
    height: "7.41%",
    width: "32.74%",
    top: "52.78%",
    left: "6.91%",
    fontSize: 24,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  eMail: {
    width: "17.67%",
    top: "37.65%",
  },
  groupItem: {
    top: "46.3%",
    bottom: "37.65%",
  },
  johndoeexemplocom: {
    width: "64.98%",
    top: "50.31%",
    left: "5.99%",
  },
  telefone: {
    width: "36.59%",
    top: "75.31%",
  },
  groupInner: {
    top: "83.95%",
    bottom: "0%",
    height: "16.05%",
  },
  text1: {
    top: "88.89%",
    left: "5.05%",
  },
  groupParent: {
    height: "40.5%",
    width: "88.06%",
    top: "30%",
    right: "5.83%",
    bottom: "29.5%",
    left: "6.11%",
    position: "absolute",
  },
  button1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  button: {
    marginLeft: -83,
    top: 658,
    width: 166,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    left: "50%",
  },
  profile1Inner: {
    top: 50,
    left: 26,
    width: 12,
  },
  desejaExcluirSua: {
    fontFamily: FontFamily.poppinsRegular,
  },
  nomeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  desejaExcluirSuaConta: {
    color: "#494949",
  },
  cliqueAqui: {
    color: "#ff0000",
  },
  desejaExcluirSuaContainer: {
    marginLeft: -131,
    top: 596,
  },
  rectangleView: {
    top: 75,
    left: 256,
    width: 76,
    height: 43,
  },
  groupIcon: {
    top: 84,
    left: 262,
    width: 26,
    height: 26,
    position: "absolute",
  },
  sair: {
    top: 88,
    left: 292,
    fontSize: 16,
    lineHeight: 16,
    width: 34,
    height: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  profile1: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;