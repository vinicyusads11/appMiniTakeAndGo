// TODO: estilizar e renomear este componente
import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const OrderInfo = () => {
  return (
    <View style={styles.orderinfo}>
      <Text style={styles.aquiEstoTodos}>
        Aqui estão todos os produtos que você acabou de comprar!
      </Text>
      <View style={[styles.orderinfoChild, styles.orderinfoShadowBox]} />
      <Text style={[styles.incio, styles.incioFlexBox]}>Início</Text>
      <View style={[styles.orderinfoItem, styles.orderinfoShadowBox]} />
      <Text
        style={[styles.baixarComprovante, styles.incioFlexBox]}
      >{`Baixar comprovante `}</Text>
      <View style={styles.orderinfoInner} />
      <View style={styles.rectangleView} />
      <Text style={styles.quantidade}>Quantidade</Text>
      <View style={[styles.orderinfoChild1, styles.orderinfoChildLayout2]} />
      <Text style={[styles.energticoMonster, styles.cupNoodlesLayout]}>
        Energético Monster
      </Text>
      <Text style={[styles.r1159, styles.r697Layout]}>R$ 11,59</Text>
      <Text style={[styles.lata350ml, styles.lata350mlClr]}>Lata 350ml</Text>
      <View style={[styles.orderinfoChild2, styles.orderinfoChildLayout1]} />
      <View style={[styles.orderinfoChild3, styles.orderinfoChildLayout]} />
      <Text style={styles.text}>3</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Image
        style={[styles.image52Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-52.png")}
      />
      <Text style={[styles.cupNoodles, styles.r697Typo]}>Cup Noodles</Text>
      <Text style={[styles.r697, styles.r697Typo]}>R$ 6,97</Text>
      <Text style={[styles.galinhaCaipira69g, styles.r697Typo]}>
        Galinha caipira 69g
      </Text>
      <Text style={[styles.quantidade1, styles.quantidadeTypo]}>
        Quantidade
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <View style={[styles.orderinfoChild4, styles.orderinfoChildLayout2]} />
      <View style={[styles.orderinfoChild5, styles.orderinfoChildLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Text style={[styles.quantidade2, styles.quantidadeTypo]}>
        Quantidade
      </Text>
      <Image
        style={styles.image58Icon}
        contentFit="cover"
        source={require("../assets/image-58.png")}
      />
      <Text style={[styles.chocolateSnickers, styles.r697Typo]}>
        Chocolate SNICKERS
      </Text>
      <Text style={[styles.r447, styles.r697Typo]}>R$ 4,47</Text>
      <Text style={[styles.original45g, styles.r697Typo]}>Original 45g</Text>
      <View style={[styles.orderinfoChild6, styles.orderinfoChildLayout1]} />
      <Image
        style={[styles.image53Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-53.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderinfoShadowBox: {
    height: 54,
    width: 229,
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  incioFlexBox: {
    height: 44,
    width: 198,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  orderinfoChildLayout2: {
    left: 13,
    height: 85,
    width: 335,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  cupNoodlesLayout: {
    height: 25,
    color: Color.colorDarkslategray_100,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
  },
  r697Layout: {
    lineHeight: 25,
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
  },
  lata350mlClr: {
    color: Color.colorDarkgray,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  orderinfoChildLayout1: {
    width: 67,
    borderRadius: Border.br_8xs,
    height: 25,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  orderinfoChildLayout: {
    left: 267,
    width: 67,
    borderRadius: Border.br_8xs,
    height: 25,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    left: 298,
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  iconLayout: {
    height: 61,
    width: 61,
    position: "absolute",
  },
  r697Typo: {
    left: 105,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  quantidadeTypo: {
    left: 269,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  aquiEstoTodos: {
    marginLeft: -161,
    top: 83,
    fontSize: 18,
    width: 323,
    height: 60,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  orderinfoChild: {
    marginLeft: -113,
    top: 686,
  },
  incio: {
    top: 691,
    left: 85,
    fontSize: 20,
  },
  orderinfoItem: {
    marginLeft: -114,
    top: 582,
  },
  baixarComprovante: {
    top: 587,
    left: 84,
    fontSize: 15,
  },
  orderinfoInner: {
    top: 204,
    left: 352,
    borderRadius: 100,
    backgroundColor: "#707070",
    width: 8,
    height: 127,
    position: "absolute",
  },
  rectangleView: {
    top: 186,
    left: 12,
    height: 85,
    width: 335,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  quantidade: {
    top: 219,
    left: 268,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  orderinfoChild1: {
    top: 288,
  },
  energticoMonster: {
    top: 215,
    width: 127,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    textAlign: "left",
    position: "absolute",
  },
  r1159: {
    top: 235,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    textAlign: "left",
    position: "absolute",
  },
  lata350ml: {
    top: 200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    textAlign: "left",
    position: "absolute",
  },
  orderinfoChild2: {
    top: 232,
    left: 266,
  },
  orderinfoChild3: {
    top: 334,
  },
  text: {
    top: 238,
    left: 297,
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.3,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text1: {
    top: 340,
  },
  image52Icon: {
    top: 304,
    left: 29,
  },
  cupNoodles: {
    top: 317,
    width: 108,
    height: 25,
    color: Color.colorDarkslategray_100,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
  },
  r697: {
    top: 337,
    lineHeight: 25,
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
  },
  galinhaCaipira69g: {
    top: 302,
    color: Color.colorDarkgray,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  quantidade1: {
    top: 320,
  },
  orderinfoChild4: {
    top: 391,
  },
  orderinfoChild5: {
    top: 437,
  },
  text3: {
    top: 443,
  },
  quantidade2: {
    top: 423,
  },
  image58Icon: {
    top: 411,
    left: 25,
    width: 70,
    height: 47,
    position: "absolute",
  },
  chocolateSnickers: {
    top: 420,
    width: 135,
    height: 25,
    color: Color.colorDarkslategray_100,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
  },
  r447: {
    top: 440,
    fontSize: 16,
    lineHeight: 21,
    color: Color.colorBlack,
    left: 105,
  },
  original45g: {
    top: 405,
    color: Color.colorDarkgray,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  orderinfoChild6: {
    top: 493,
    left: 240,
  },
  image53Icon: {
    left: 28,
    top: 200,
  },
  orderinfo: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default OrderInfo;