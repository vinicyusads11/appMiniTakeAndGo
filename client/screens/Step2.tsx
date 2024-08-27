// TODO: estilizar e renomear este cmponente
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Step2 = () => {
  return (
    <View style={styles.step2}>
      <Image
        style={styles.step2Child}
        contentFit="cover"
        source={require("../assets/listacomprascestaicon.png")}
      />
      <Pressable style={styles.voltar} onPress={() => {}}>
        <Text style={[styles.voltar1, styles.voltar1Typo]}>VOLTAR</Text>
      </Pressable>
      <Pressable style={styles.crossblue} onPress={() => {}}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/crossblue.png")}
        />
      </Pressable>
      <Image 
        style={styles.step2Item}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.step2Inner, styles.step2InnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.step2InnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={styles.text}>2</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.step2Child1, styles.lineViewLayout]} />
      <Pressable style={styles.prximo} onPress={() => {}}>
        <Text style={[styles.prximo1, styles.voltar1Typo]}>PRÓXIMO</Text>
      </Pressable>
      <Text style={styles.confiraTodosOs}>
        Confira todos os produtos e finalize seu pedido
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  voltar1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray,
    fontSize: FontSize.size_xs,
  },
  step2InnerLayout: {
    width: 30,
    height: 30,
    top: 96,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 36,
    borderTopWidth: 1,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    top: 111,
    position: "absolute",
  },
  step2Child: {
    marginLeft: -99,
    top: 230,
    borderRadius: 20,
    width: 198,
    height: 198,
    left: "50%",
    position: "absolute",
  },
  voltar1: {
    width: 45,
    height: 14,
  },
  voltar: {
    left: 40,
    top: 753,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  crossblue: {
    left: 375,
    top: 23,
    width: 30,
    height: 30,
    position: "absolute",
  },
  step2Item: {
    left: 200,
    width: 31,
    height: 30,
    top: 96,
    position: "absolute",
  },
  step2Inner: {
    left: 95,
  },
  ellipseIcon: {
    left: 300,
  },
  text: {
    left: 211,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    top: 98,
    textAlign: "left",
    position: "absolute",
  },
  lineView: {
    left: 150,
  },
  step2Child1: {
    left: 250,
  },
  prximo1: {
    width: 56,
    height: 16,
  },
  prximo: {
    left: 350,
    top: 751,
    position: "absolute",
  },
  confiraTodosOs: {
    marginLeft: -102,
    top: 457,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    width: 204,
    height: 58,
    color: Color.colorGray,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  step2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",

  },
});

export default Step2;
