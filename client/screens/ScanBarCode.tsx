import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ScanBarCode = () => {
  return (
    <View style={styles.scanbarcode}>
      <Image
        style={styles.scanbarcodeChild}
        contentFit="cover"
        source={require("../assets/vector-36.png")}
      />
      <Text style={[styles.aponteParaOContainer, styles.button1Typo]}>
        <Text style={styles.aponteParaO}>
          <Text style={styles.aponteParaO1}>Aponte para o</Text>
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={styles.cdigoDeBarras}>código de barras</Text>
        <Text style={styles.aponteParaO}>
          <Text style={styles.textTypo}>{` `}</Text>
          <Text style={styles.aponteParaO1}>do produto</Text>
        </Text>
      </Text>
      <Image
        style={styles.unsplashh0vxgz5tyxaIcon}
        contentFit="cover"
        source={require("../assets/unsplashfundo.png")}
      />
      <View style={styles.scanbarcodeInner}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.image60Icon}
            contentFit="cover"
            source={require("../assets/image-60.png")}
          />
        </View>
      </View>
      <View style={styles.scanbarcodeItem} />
      <View style={[styles.lineView, styles.scanbarcodeChildLayout1]} />
      <View style={[styles.scanbarcodeChild1, styles.scanbarcodeChildLayout]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-24.png")}
      />
      <Image
        style={[styles.scanbarcodeChild2, styles.buttonLayout]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={[styles.scanbarcodeChild3, styles.scanbarcodeChildLayout]} />
      <View
        style={[styles.scanbarcodeChild4, styles.scanbarcodeChildLayout1]}
      />
      <View
        style={[styles.scanbarcodeChild5, styles.scanbarcodeChildPosition]}
      />
      <View
        style={[styles.scanbarcodeChild6, styles.scanbarcodeChildPosition]}
      />
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.button1, styles.textTypo]}>Voltar</Text>
      </View>
      <Image
        style={styles.interfaceEssentialalertTriaIcon}
        contentFit="cover"
        source={require("../assets/searchicon.png")}
      />
      <Text style={[styles.restaurantName, styles.restaurantNamePosition]}>
        Não leve os produtos sem pagar
      </Text>
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
  scanbarcodeChildLayout1: {
    width: 42,
    height: 2,
    borderTopWidth: 2,
  },
  scanbarcodeChildLayout: {
    height: 42,
    width: 2,
    borderRightWidth: 2,
  },
  buttonLayout: {
    height: 40,
    position: "absolute",
  },
  scanbarcodeChildPosition: {
    left: 33,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  restaurantNamePosition: {
    letterSpacing: 1,
    left: "50%",
    position: "absolute",
  },
  scanbarcodeChild: {
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
  cdigoDeBarras: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDeepskyblue,
  },
  aponteParaOContainer: {
    top: 170,
    letterSpacing: 1,
    left: "50%",
    position: "absolute",
    marginLeft: -164,
    fontSize: FontSize.size_sm,
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
  image60Icon: {
    marginLeft: -79.95,
    top: 2,
    width: 160,
    height: 160,
    left: "50%",
    position: "absolute",
  },
  scanbarcodeInner: {
    top: 336,
    left: 98,
    height: 162,
    width: 164,
    position: "absolute",
  },
  scanbarcodeItem: {
    top: 416,
    width: 320,
    height: 2,
    borderTopWidth: 2,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    left: "50%",
    marginLeft: -164,
    position: "absolute",
  },
  lineView: {
    left: 37,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scanbarcodeChild1: {
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
  scanbarcodeChild2: {
    top: 544,
    left: 332,
    width: 0,
  },
  scanbarcodeChild3: {
    left: 331,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scanbarcodeChild4: {
    left: 291,
    top: 250,
    borderColor: Color.colorDeepskyblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scanbarcodeChild5: {
    top: 543,
    height: 42,
    width: 2,
    borderRightWidth: 2,
  },
  scanbarcodeChild6: {
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
  interfaceEssentialalertTriaIcon: {
    width: "6.67%",
    top: 199,
    right: "75.28%",
    left: "18.06%",
    maxWidth: "100%",
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  restaurantName: {
    marginTop: -196,
    marginLeft: -89,
    top: "50%",
    fontSize: 10,
    color: Color.second,
    textAlign: "left",
    width: 179,
    opacity: 0.3,
    fontFamily: FontFamily.poppinsRegular,
  },
  scanbarcode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ScanBarCode;