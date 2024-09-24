// TODO: estilizar e renomear este componente
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Basket = () => {
  return (
    <View style={styles.basket}>
      <View style={[styles.basketChild, styles.basketBorder]} />
      <Image
        style={styles.basketItem}
        contentFit="cover"
        source={require("../assets/vector-36.png")}
      />
      <Text style={styles.cesta}>Cesta</Text>
      <Text style={[styles.total, styles.totalClr]}>Total</Text>
      <Text style={[styles.r5318, styles.totalClr]}>R$ 53,18</Text>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.button1}>Pagar</Text>
      </View>
      <View style={[styles.basketInner, styles.basketBorder]} />
      <Text style={[styles.adicionarMaisItens, styles.esvaziarCestaTypo]}>
        Adicionar mais itens
      </Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.formaDePagamentoContainer, styles.buttonFlexBox]}>
        <Text style={styles.formaDePagamentoContainer1}>
          <Text style={styles.formaDePagamento}>{`Forma de pagamento: `}</Text>
          <Text style={styles.pix}>Pix</Text>
        </Text>
      </Text>
      <Image
        style={styles.image49Icon}
        contentFit="cover"
        source={require("../assets/pixicon.png")}
      />
      <View style={styles.basketChild1} />
      <Text style={[styles.esvaziarCesta, styles.esvaziarCestaTypo]}>
        Esvaziar cesta
      </Text>
      <View style={[styles.basketChild2, styles.basketChildLayout3]} />
      <View style={[styles.basketChild3, styles.basketChildLayout3]} />
      <Text style={[styles.energticoMonster, styles.cupNoodlesTypo]}>
        EnergÃ©tico Monster
      </Text>
      <Text style={[styles.r1159, styles.r697Typo]}>R$ 11,59</Text>
      <Text style={[styles.lata350ml, styles.lata350mlTypo]}>Lata 350ml</Text>
      <View style={[styles.basketChild4, styles.basketChildLayout2]} />
      <View style={[styles.basketChild5, styles.basketChildLayout2]} />
      <Image
        style={[styles.groupIcon, styles.basketChildLayout1]}
        contentFit="cover"
        source={require("../assets/plusicon.png")}
      />
      <Image
        style={[styles.basketChild6, styles.basketChildLayout1]}
        contentFit="cover"
        source={require("../assets/plusicon.png")}
      />
      <Image
        style={[styles.basketChild7, styles.basketChildLayout]}
        contentFit="cover"
        source={require("../assets/lessicon.png")}
      />
      <Image
        style={[styles.basketChild8, styles.basketChildLayout]}
        contentFit="cover"
        source={require("../assets/lessicon.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>3</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Image
        style={[styles.image52Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-52.png")}
      />
      <Text style={[styles.cupNoodles, styles.cupNoodlesTypo]}>
        Cup Noodles
      </Text>
      <Text style={[styles.r697, styles.r697Typo]}>R$ 6,97</Text>
      <Text style={[styles.galinhaCaipira69g, styles.lata350mlTypo]}>
        Galinha caipira 69g
      </Text>
      <View style={[styles.basketChild5, styles.basketChildLayout2]} />
      <Image
        style={[styles.basketChild6, styles.basketChildLayout1]}
        contentFit="cover"
        source={require("../assets/plusicon.png")}
      />
      <Image
        style={[styles.basketChild8, styles.basketChildLayout]}
        contentFit="cover"
        source={require("../assets/lessicon.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <View style={[styles.basketChild12, styles.basketChildLayout3]} />
      <View style={[styles.basketChild13, styles.basketChildLayout2]} />
      <Image
        style={[styles.basketChild14, styles.basketChildLayout1]}
        contentFit="cover"
        source={require("../assets/plusicon.png")}
      />
      <Image
        style={[styles.basketChild15, styles.basketChildLayout]}
        contentFit="cover"
        source={require("../assets/lessicon.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Image
        style={styles.image58Icon}
        contentFit="cover"
        source={require("../assets/image-58.png")}
      />
      <Text style={[styles.chocolateSnickers, styles.cupNoodlesTypo]}>
        Chocolate SNICKERS
      </Text>
      <Text style={styles.r447}>R$ 4,47</Text>
      <Text style={[styles.original45g, styles.lata350mlTypo]}>
        Original 45g
      </Text>
      <View style={[styles.basketChild13, styles.basketChildLayout2]} />
      <Image
        style={[styles.basketChild14, styles.basketChildLayout1]}
        contentFit="cover"
        source={require("../assets/plusicon.png")}
      />
      <Image
        style={[styles.basketChild15, styles.basketChildLayout]}
        contentFit="cover"
        source={require("../assets/lessicon.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Image
        style={[styles.image53Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-53.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basketBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  totalClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  buttonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  esvaziarCestaTypo: {
    fontSize: FontSize.size_xs,
    top: 453,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  basketChildLayout3: {
    height: 85,
    width: 335,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 12,
    position: "absolute",
  },
  cupNoodlesTypo: {
    height: 25,
    color: Color.colorDarkslategray_100,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  r697Typo: {
    lineHeight: 25,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  lata350mlTypo: {
    color: Color.colorDarkgray,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    textAlign: "left",
    position: "absolute",
  },
  basketChildLayout2: {
    width: 67,
    left: 266,
    height: 25,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  basketChildLayout1: {
    height: 10,
    width: 10,
    left: 315,
    position: "absolute",
  },
  basketChildLayout: {
    height: 0,
    left: 273,
    width: 12,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_200,
    left: 297,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 61,
    width: 61,
    left: 28,
    position: "absolute",
  },
  basketChild: {
    bottom: 713,
    left: 0,
    backgroundColor: "#272626",
    borderColor: Color.colorDeepskyblue,
    borderWidth: 1,
    width: 360,
    height: 87,
  },
  basketItem: {
    top: 50,
    left: 26,
    height: 20,
    width: 12,
    position: "absolute",
  },
  cesta: {
    marginLeft: -30,
    top: 44,
    fontSize: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  total: {
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    top: 630,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
    left: 23,
  },
  r5318: {
    left: 256,
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    top: 630,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  button1: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  button: {
    marginLeft: -83,
    top: 678,
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
    width: 166,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    left: "50%",
  },
  basketInner: {
    marginLeft: -102.5,
    top: 645,
    borderColor: Color.colorDarkgray,
    borderTopWidth: 1,
    width: 171,
    height: 1,
    left: "50%",
  },
  adicionarMaisItens: {
    marginLeft: -168,
    color: Color.colorDeepskyblue,
  },
  rectangleView: {
    top: 147,
    left: 352,
    borderRadius: 100,
    backgroundColor: "#707070",
    width: 8,
    height: 127,
    position: "absolute",
  },
  formaDePagamento: {
    fontFamily: FontFamily.poppinsRegular,
  },
  pix: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  formaDePagamentoContainer1: {
    width: "100%",
  },
  formaDePagamentoContainer: {
    top: 593,
    fontSize: 14,
    letterSpacing: -0.4,
    display: "flex",
    width: 244,
    color: Color.colorBlack,
    textAlign: "left",
    left: 23,
  },
  image49Icon: {
    height: "3%",
    width: "6.67%",
    top: "74%",
    right: "37.78%",
    bottom: "23%",
    left: "55.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  basketChild1: {
    left: 239,
    backgroundColor: "#ff0000",
    width: 114,
    height: 18,
    borderRadius: Border.br_8xs,
    top: 453,
    position: "absolute",
  },
  esvaziarCesta: {
    marginLeft: 74,
    color: Color.colorWhite,
    top: 453,
  },
  basketChild2: {
    top: 138,
  },
  basketChild3: {
    top: 239,
  },
  energticoMonster: {
    top: 167,
    width: 127,
  },
  r1159: {
    top: 187,
  },
  lata350ml: {
    top: 152,
  },
  basketChild4: {
    top: 184,
  },
  basketChild5: {
    top: 285,
  },
  groupIcon: {
    top: 192,
  },
  basketChild6: {
    top: 293,
  },
  basketChild7: {
    top: 196,
  },
  basketChild8: {
    top: 297,
  },
  text: {
    top: 190,
  },
  text1: {
    top: 291,
  },
  image52Icon: {
    top: 255,
  },
  cupNoodles: {
    top: 268,
    width: 108,
  },
  r697: {
    top: 288,
  },
  galinhaCaipira69g: {
    top: 253,
  },
  basketChild12: {
    top: 341,
  },
  basketChild13: {
    top: 387,
  },
  basketChild14: {
    top: 395,
  },
  basketChild15: {
    top: 399,
  },
  text3: {
    top: 393,
  },
  image58Icon: {
    top: 361,
    left: 24,
    width: 70,
    height: 47,
    position: "absolute",
  },
  chocolateSnickers: {
    top: 370,
    width: 135,
  },
  r447: {
    top: 390,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 104,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  original45g: {
    top: 355,
  },
  image53Icon: {
    top: 152,
  },
  basket: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Basket;