import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
import { Redirect } from 'expo-router';

const styles = StyleSheet.create({
  basket: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },

  totalClr: {
    color: Color.colorBlack,
    textAlign: 'left',
  },

  buttonFlexBox: {
    alignItems: 'center',
    position: 'absolute',
  },

  esvaziarCestaTypo: {
    fontSize: FontSize.size_xs,
    top: 453,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    left: '50%',
    position: 'absolute',
  },

  todasAsDivsCinzasProdutos: {
    height: 85,
    width: 335,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_base,
    left: 12,
    position: 'absolute',
  },

  nomeDosProdutos: {
    height: 25,
    color: Color.colorDarkslategray_100,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    left: 104,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    position: 'absolute',
  },

  r697Typo: {
    lineHeight: 25,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    left: 104,
    color: Color.colorBlack,
    textAlign: 'left',
    position: 'absolute',
  },

  lata350mlTypo: {
    color: Color.colorDarkgray,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    left: 104,
    textAlign: 'left',
    position: 'absolute',
  },

  basketChildLayout2: {
    width: 67,
    left: 266,
    height: 25,
    borderRadius: Border.br_8xs,
    position: 'absolute',
    backgroundColor: Color.colorWhite,
  },

  basketChildLayout1: {
    height: 10,
    width: 10,
    left: 315,
    position: 'absolute',
  },

  basketChildLayout: {
    height: 0,
    left: 273,
    width: 12,
    position: 'absolute',
  },

  textTypo: {
    color: Color.colorDarkslategray_200,
    left: 297,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textAlign: 'left',
    position: 'absolute',
  },

  iconLayout: {
    height: 61,
    width: 61,
    left: 28,
    position: 'absolute',
  },

  basketChild: {
    bottom: 713,
    left: 0,
    backgroundColor: '#272626',
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
    position: 'absolute',
  },

  cesta: {
    top: 44,
    fontSize: 20,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
  },

  total: {
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    top: 630,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
    left: 23,
  },

  precoTotal: {
    left: 256,
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    top: 630,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    position: 'absolute',
  },

  button1: {
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: 'center',
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },

  button: {
    marginLeft: -83,
    top: 678,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    left: '50%',
  },

  basketInner: {
    marginLeft: -102.5,
    top: 645,
    borderColor: Color.colorDarkgray,
    borderTopWidth: 1,
    width: 171,
    height: 1,
    left: '50%',
  },

  adicionarMaisItens: {
    marginLeft: -168,
    color: Color.colorDeepskyblue,
  },

  rectangleView: {
    top: 147,
    left: 352,
    borderRadius: 100,
    backgroundColor: '#707070',
    width: 8,
    height: 127,
    position: 'absolute',
  },

  formaDePagamento: {
    fontFamily: FontFamily.poppinsRegular,
  },

  pix: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
  },

  formaDePagamentoContainer1: {
    width: '100%',
  },

  nomeFormaDePagamentoPIX: {
    top: 593,
    fontSize: 14,
    letterSpacing: -0.4,
    display: 'flex',
    width: 244,
    color: Color.colorBlack,
    textAlign: 'left',
    left: 23,
  },

  imagemPIX: {
    top: '73.3%',
    right: '37.78%',
    bottom: '23%',
    left: '55.56%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },

  botaoVermelhoEsvaziarCesta: {
    left: 239,
    backgroundColor: '#ff0000',
    width: 114,
    height: 18,
    borderRadius: Border.br_8xs,
    top: 453,
    position: 'absolute',
  },

  nomeEsvaziarCesta: {
    marginLeft: 74,
    color: Color.colorWhite,
    top: 453,
  },

  basketChild7: {
    top: 196,
  },

  basketChild8: {
    top: 297,
  },

  // Parte Organizada:

  // ESTILIZAÇÃO DA DIV DO CUP NOODLES GALINHA CAIPIRA

  divCinzaCupNoodles: {
    top: 239,
  },

  fotoCupNoodles: {
    top: 255,
  },

  descricaoCupNoodles: {
    top: 253,
  },

  nomeCupNoodles: {
    top: 268,
    width: 108,
  },

  precoCupNoodles: {
    top: 288,
  },

  fundoAlterarQuantidadeCupNoodles: {
    top: 285,
  },

  numero2CupNoodles: {
    top: 291,
  },

  sinalDeMaisCupNoodles: {
    top: 293,
  },

  // ESTILIZAÇÃO DA DIV DO CHOCOLATE SNICKERS

  divCinzaChocolateSnickers: {
    top: 341,
  },

  fotoChocolateSnickers: {
    top: 361,
    left: 24,
    width: 70,
    height: 47,
    position: 'absolute',
  },

  descricaoChocolateSnickers: {
    top: 350,
    left: 104,
    width: 150,
    height: 20,
    textAlign: 'left',
    position: 'absolute',
  },

  nomeChocolateSnickers: {
    top: 370,
    width: 135,
  },

  precoChocolateSnickers: {
    top: 385,
    lineHeight: 21,
    left: 105,
    fontWeight: '500',
  },

  fundoAlterarQuantidadeSnickers: {
    top: 387,
  },

  numero1Snickers: {
    top: 393,
  },

  sinalDeMaisChocolateSnickers: {
    top: 395,
  },

  // ESTILIZAÇÃO DA DIV DO ENERGETICO MONSTER

  divCinzaEnergeticoMonster: {
    top: 138,
  },

  fotoEnergeticoMonster: {
    top: 150,
    left: 28,
    width: 61,
    height: 61,
    position: 'absolute',
  },

  descricaoEnergeticoMonster: {
    top: 152,
  },

  nomeEnergeticoMonster: {
    top: 167,
    width: 127,
  },

  precoEnergeticoMonster: {
    top: 187,
  },

  fundoAlterarQuantidadeEnergeticoMonster: {
    top: 184,
  },

  sinalDeMaisEnergeticoMonster: {
    top: 192,
  },

  numero3EnergeticoMonster: {
    top: 190,
  },
});

export default styles;
