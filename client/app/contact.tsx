import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Contact = () => {
  return (
    <View style={styles.contact}>
      <View style={styles.contactChild} />
      <Image
        style={styles.contactItem}
        contentFit="cover"
        source={require("../assets/vector-36.png")}
      />
      <Text style={styles.faleConosco}>Fale conosco</Text>
      <Image
        style={[styles.image14Icon, styles.image14IconPosition]}
        contentFit="cover"
        source={require("../assets/whatsappicon.png")}
      />
      <Text style={styles.algumProblemaOu}>Algum problema ou dúvida?</Text>
      <Text style={[styles.cliqueNoConeContainer, styles.textTypo]}>
        <Text style={styles.cliqueNo}>Clique no</Text>
        <Text style={styles.coneTypo}>{` ícone `}</Text>
        <Text style={styles.cliqueNo}>e entre em contato:</Text>
      </Text>
      <Text style={[styles.text, styles.coneTypo]}>+55 (48) 98800-2368</Text>
      <Image
        style={[styles.logotipoPretoSemFundo1, styles.image14IconPosition]}
        contentFit="cover"
        source={require("../assets/logopretosemfundo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image14IconPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  coneTypo: {
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  contactChild: {
    bottom: 713,
    left: 0,
    backgroundColor: "#272626",
    borderStyle: "solid",
    borderColor: Color.colorDeepskyblue,
    borderWidth: 1,
    width: 360,
    height: 87,
    position: "absolute",
  },
  contactItem: {
    top: 50,
    left: 26,
    width: 12,
    height: 20,
    position: "absolute",
  },
  faleConosco: {
    marginLeft: -66,
    top: 44,
    letterSpacing: 0,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  image14Icon: {
    marginLeft: -105,
    top: 501,
    width: 47,
    height: 53,
  },
  algumProblemaOu: {
    marginLeft: -147,
    top: 390,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  cliqueNo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
  },
  cliqueNoConeContainer: {
    marginLeft: -134,
    top: 478,
  },
  text: {
    marginLeft: -58,
    top: 517,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  logotipoPretoSemFundo1: {
    marginLeft: -61,
    top: 196,
    width: 121,
    height: 175,
  },
  contact: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Contact;