import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={[styles.restante6, styles.restanteFlexBox]}>
        Restante: 6
      </Text>
      <Image
        style={[styles.homeChild, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/quadradobordaazul.png")}
      />
      <Image
        style={[styles.homeItem, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/quadradobordaazul.png")}
      />
      <Text style={[styles.price, styles.priceTypo]}>R$ 8,47</Text>
      <Text style={[styles.restante4, styles.restanteFlexBox]}>
        Restante: 4
      </Text>
      <Text style={[styles.price1, styles.priceTypo]}>R$ 12,47</Text>
      <Text style={[styles.olJohn, styles.restanteFlexBox]}>
        <Text style={styles.olTypo}>{`Olá, `}</Text>
        <Text style={styles.john}>John!</Text>
        <Text style={styles.blankLine}> </Text>
      </Text>
      <View style={[styles.homeInner, styles.lineViewBorder]} />
      <Text style={[styles.desejaVerOContainer, styles.containerPosition]}>
        <Text style={styles.desejaVerOTutoralDeCompra}>
          <Text style={styles.desejaVerO}>
            Deseja ver o tutoral de compra novamente?
          </Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={[styles.cliqueAqui, styles.priceTypo]}>Clique aqui</Text>
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text style={[styles.paraIniciarSuaContainer, styles.containerPosition]}>
        <Text style={styles.desejaVerOTutoralDeCompra}>
          <Text style={styles.desejaVerO}>
            Para iniciar sua compra, clique no ícone do
          </Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.cdigoDeBarras}>
          <Text style={styles.priceTypo}>código de barras</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.naParteInferior}>na parte inferior da tela</Text>
      </Text>
      <Text style={[styles.nossosProdutos, styles.nossosProdutosFlexBox]}>
        Nossos produtos!
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.homeChild3Position]}
        contentFit="cover"
        source={require("../assets/quadradobordaazul.png")}
      />
      <Image
        style={[styles.image52Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-52.png")}
      />
      <Text style={[styles.cupNoodles, styles.cupNoodlesTypo]}>
        Cup Noodles
      </Text>
      <Text style={[styles.restante61, styles.restanteTypo1]}>Restante: 6</Text>
      <Text style={[styles.price2, styles.pricePosition1]}>R$ 6,97</Text>
      <Text style={[styles.restaurantName, styles.restaurantTypo]}>
        Galinha caipira 69g
      </Text>
      <Text style={[styles.poVisconti, styles.poViscontiTypo]}>
        Pão Visconti
      </Text>
      <Text style={styles.restaurantName1}>Tradicional 400g</Text>
      <Text style={[styles.salgadinhoDoritos, styles.poViscontiTypo]}>
        Salgadinho Doritos
      </Text>
      <Text style={styles.restaurantName2}>Original 84g</Text>
      <Image
        style={[styles.homeChild1, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/quadradobordaazul.png")}
      />
      <Image
        style={[styles.image58Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-58.png")}
      />
      <Text style={[styles.chocolateSnickers, styles.cervejaHeinekenTypo]}>
        Chocolate SNICKERS
      </Text>
      <Text style={[styles.restante20, styles.restanteTypo]}>Restante: 20</Text>
      <Text style={[styles.price3, styles.pricePosition]}>R$ 4,47</Text>
      <Text style={[styles.restaurantName3, styles.restaurantPosition]}>
        Original 45g
      </Text>
      <Image
        style={[styles.homeChild2, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/quadradobordaazul.png")}
      />
      <Text style={[styles.cervejaHeineken, styles.cervejaHeinekenTypo]}>
        Cerveja Heineken
      </Text>
      <Text style={[styles.restante8, styles.restanteTypo]}>Restante: 8</Text>
      <Text style={[styles.price4, styles.pricePosition1]}>R$ 7,47</Text>
      <Text style={[styles.restaurantName4, styles.restaurantPosition]}>
        Lata 350ml
      </Text>
      <Image
        style={[styles.homeChild3, styles.homeChild3Position]}
        contentFit="cover"
        source={require("../assets/quadradobordaazul.png")}
      />
      <Image
        style={[styles.image53Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-53.png")}
      />
      <Text style={[styles.energticoMonster, styles.cupNoodlesTypo]}>
        Energético Monster
      </Text>
      <Text style={[styles.restante12, styles.restanteTypo1]}>
        Restante: 12
      </Text>
      <Text style={[styles.price5, styles.pricePosition]}>R$ 11,59</Text>
      <Text style={[styles.restaurantName5, styles.restaurantTypo]}>
        {" "}
        Lata 473ml
      </Text>
      <Image
        style={[styles.image54Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-54.png")}
      />
      <Image
        style={styles.image56Icon}
        contentFit="cover"
        source={require("../assets/image-56.png")}
      />
      <Image
        style={styles.image55Icon}
        contentFit="cover"
        source={require("../assets/image-55.png")}
      />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={styles.homeChild4}
        contentFit="cover"
        source={require("../assets/rectangle-177.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/searchicon.png")}
      />
      <Text style={[styles.buscarPorProduto, styles.nossosProdutosFlexBox]}>
        Buscar por produto
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restanteFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    height: 146,
    width: 160,
    borderRadius: Border.br_3xs,
    top: 627,
    left: "50%",
    position: "absolute",
  },
  priceTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  containerPosition: {
    width: 199,
    marginLeft: -36,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  nossosProdutosFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  homeChild3Position: {
    top: 315,
    height: 146,
    width: 160,
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 58,
    height: 72,
    position: "absolute",
  },
  cupNoodlesTypo: {
    top: 320,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  restanteTypo1: {
    top: 438,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  pricePosition1: {
    marginLeft: -156,
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: "50%",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  restaurantTypo: {
    opacity: 0.3,
    color: Color.second,
    fontSize: FontSize.size_2xs,
    marginTop: -62,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  poViscontiTypo: {
    top: 632,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  homeChildPosition: {
    top: 471,
    height: 146,
    width: 160,
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 512,
    position: "absolute",
  },
  cervejaHeinekenTypo: {
    top: 476,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  restanteTypo: {
    top: 594,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  pricePosition: {
    width: 68,
    marginLeft: 19,
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: "50%",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  restaurantPosition: {
    marginTop: 94,
    width: "25.83%",
    opacity: 0.3,
    color: Color.second,
    fontSize: FontSize.size_2xs,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  restante6: {
    left: 104,
    color: Color.colorBlack,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    top: 750,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  homeChild: {
    marginLeft: -166,
  },
  homeItem: {
    marginLeft: 9,
  },
  price: {
    marginLeft: 18,
    width: 63,
    color: Color.colorDeepskyblue,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: 343,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  restante4: {
    left: 279,
    color: Color.colorBlack,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    top: 750,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  price1: {
    marginLeft: -157,
    width: 69,
    color: Color.colorDeepskyblue,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: 343,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  olTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  john: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorDeepskyblue,
  },
  blankLine: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
  },
  olJohn: {
    top: 181,
    left: 17,
    fontSize: 20,
    letterSpacing: -0.6,
    width: 142,
    height: 32,
  },
  homeInner: {
    bottom: 634,
    left: -1,
    backgroundColor: Color.colorGray,
    borderColor: Color.colorDeepskyblue,
    borderWidth: 1,
    width: 362,
    height: 167,
  },
  desejaVerO: {
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  desejaVerOTutoralDeCompra: {
    color: Color.colorWhitesmoke,
  },
  cliqueAqui: {
    color: Color.colorDeepskyblue,
  },
  desejaVerOContainer: {
    bottom: 653,
  },
  lineView: {
    marginLeft: 2.5,
    top: 91,
    borderColor: "#b1b1b1",
    borderTopWidth: 1,
    width: 121,
    height: 1,
    left: "50%",
  },
  cdigoDeBarras: {
    color: Color.colorDeepskyblue,
  },
  naParteInferior: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  paraIniciarSuaContainer: {
    bottom: 729,
  },
  nossosProdutos: {
    marginLeft: -137,
    top: 277,
    color: Color.colorGray,
    width: 274,
    height: 27,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  rectangleIcon: {
    marginLeft: -167,
  },
  image52Icon: {
    top: 356,
    left: 63,
    height: 72,
  },
  cupNoodles: {
    left: 55,
  },
  restante61: {
    left: 105,
  },
  price2: {
    width: 67,
    marginTop: 31,
  },
  restaurantName: {
    width: "33.06%",
    left: "9.44%",
  },
  poVisconti: {
    left: 232,
  },
  restaurantName1: {
    width: "32.5%",
    left: "61.94%",
    marginTop: 250,
    opacity: 0.3,
    color: Color.second,
    fontSize: FontSize.size_2xs,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  salgadinhoDoritos: {
    left: 37,
  },
  restaurantName2: {
    left: "15%",
    width: "25.83%",
    marginTop: 250,
    opacity: 0.3,
    color: Color.second,
    fontSize: FontSize.size_2xs,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  homeChild1: {
    marginLeft: 8,
  },
  image58Icon: {
    left: 217,
    width: 111,
    height: 56,
  },
  chocolateSnickers: {
    left: 207,
  },
  restante20: {
    left: 278,
  },
  price3: {
    marginTop: 187,
  },
  restaurantName3: {
    left: "63.89%",
  },
  homeChild2: {
    marginLeft: -167,
  },
  cervejaHeineken: {
    left: 41,
  },
  restante8: {
    left: 105,
  },
  price4: {
    width: 64,
    marginTop: 187,
  },
  restaurantName4: {
    left: "16.67%",
  },
  homeChild3: {
    marginLeft: 8,
  },
  image53Icon: {
    top: 355,
    left: 243,
    height: 72,
  },
  energticoMonster: {
    left: 210,
  },
  restante12: {
    left: 280,
  },
  price5: {
    marginTop: 31,
  },
  restaurantName5: {
    width: "18.89%",
    left: "66.11%",
  },
  image54Icon: {
    left: 56,
    width: 76,
    height: 72,
  },
  image56Icon: {
    top: 668,
    left: 64,
    width: 50,
    height: 69,
    position: "absolute",
  },
  image55Icon: {
    top: 664,
    left: 236,
    width: 66,
    height: 77,
    position: "absolute",
  },
  image3Icon: {
    marginLeft: -173,
    top: 3,
    width: 138,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  homeChild4: {
    marginLeft: -146,
    top: 222,
    borderRadius: 35,
    width: 308,
    height: 35,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "2.1%",
    width: "4.67%",
    top: "28.88%",
    right: "82.83%",
    bottom: "69.03%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buscarPorProduto: {
    top: 229,
    left: 80,
    fontSize: 13,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;