// TODO: estilizar e renomear este componente
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ScanBranch1 = () => {
  return (
    <View style={styles.scanbranch}>
      <Image
        style={styles.scanbranchChild}
        contentFit="cover"
        source={require("../assets/vector-36.png")}
      />
      <Text style={[styles.aponteParaOContainer, styles.button1Typo]}>
        <Text style={styles.aponteParaO}>
          <Text style={styles.aponteParaO1}>Aponte para o</Text>
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={styles.qrCode}>{`QR Code `}</Text>
        <Text style={styles.queEstLocalizado}>
          que estÃ¡ localizado na porta do mercado
        </Text>
      </Text>
      <Image
        style={styles.unsplashh0vxgz5tyxaIcon}
        contentFit="cover"
        source={require("../assets/unsplashfundo.png")}
      />
      <View style={styles.scanbranchInner}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/qrcodeiconpreto.png")}
          />
        </View>
      </View>
      <View style={styles.scanbranchItem} />
      <View style={[styles.lineView, styles.scanbranchChildLayout1]} />
      <View style={[styles.scanbranchChild1, styles.scanbranchChildLayout]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-24.png")}
      />
      <Image
        style={[styles.scanbranchChild2, styles.buttonLayout]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={[styles.scanbranchChild3, styles.scanbranchChildLayout]} />
      <View style={[styles.scanbranchChild4, styles.scanbranchChildLayout1]} />
      <View style={[styles.scanbranchChild5, styles.scanbranchChildPosition]} />
      <View style={[styles.scanbranchChild6, styles.scanbranchChildPosition]} />
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.button1, styles.textTypo]}>Voltar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 162,
    width: 164,
    position: "absolute",
  },
  scanbranchChildLayout1: {
    width: 42,
    height: 2,
    borderTopWidth: 2,
  },
  scanbranchChildLayout: {
    height: 42,
    width: 2,
    borderRightWidth: 2,
  },
  buttonLayout: {
    height: 40,
    position: "absolute",
  },
  scanbranchChildPosition: {
    left: 33,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  scanbranchChild: {
    top: 50,
    left: 26,
    width: 12,
    height: 20,
    position: "absolute",
  },
  aponteParaO1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  aponteParaO: {
    color: Color.colorBlack,
  },
  qrCode: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDeepskyblue,
  },
  queEstLocalizado: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  aponteParaOContainer: {
    marginLeft: -159,
    top: 169,
    letterSpacing: 1,
    width: 317,
    left: "50%",
    position: "absolute",
  },
  unsplashh0vxgz5tyxaIcon: {
    marginLeft: -91,
    top: 251,
    width: 183,
    height: 333,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "rgba(255, 255, 255, 0.72)",
  },
  image1Icon: {
    top: 4,
    left: 10,
    width: 142,
    height: 155,
    position: "absolute",
  },
  scanbranchInner: {
    top: 336,
    left: 98,
    height: 162,
    width: 164,
    position: "absolute",
  },
  scanbranchItem: {
    marginLeft: -164,
    top: 416,
    width: 320,
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  lineView: {
    left: 37,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scanbranchChild1: {
    left: 37,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  lineIcon: {
    top: 584,
    left: 292,
    width: 40,
    height: 0,
    position: "absolute",
  },
  scanbranchChild2: {
    top: 544,
    left: 332,
    width: 0,
  },
  scanbranchChild3: {
    left: 331,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scanbranchChild4: {
    left: 291,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scanbranchChild5: {
    top: 543,
    height: 42,
    width: 2,
    borderRightWidth: 2,
  },
  scanbranchChild6: {
    top: 583,
    width: 42,
    height: 2,
    borderTopWidth: 2,
  },
  button1: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  button: {
    marginLeft: -146,
    top: 723,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 12,
    backgroundColor: Color.colorDeepskyblue,
    width: 298,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    left: "50%",
  },
  scanbranch: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ScanBranch1;