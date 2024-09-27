// TODO: estilizar e renomear este componente
import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { FontSize, FontFamily, Color } from '../GlobalStyles';

const Payment = () => {
  return (
    <View style={styles.payment}>
      <Text style={styles.brgovbcbpix256}>02020303012923013br.gov.bcb.pix256..</Text>
      <Text style={[styles.instruesParaFinalizarAContainer, styles.copiarCdigoPixPosition]}>
        <Text style={[styles.instrues, styles.r5318Typo]}>Instruções:</Text>
        <Text style={styles.paraFinalizarACompraCopie}>
          <Text style={styles.blankLine}> </Text>
          <Text
            style={styles.paraFinalizarA}
          >{`Para finalizar a compra, copie e cole o código abaixo no seu aplicativo de pagamento de sua preferência. Após isso, sua compra será aprovada em instantes. `}</Text>
        </Text>
      </Text>
      <View style={[styles.paymentChild, styles.buttonPosition]} />
      <View style={[styles.paymentItem, styles.paymentBorder]} />
      <Image
        style={styles.paymentInner}
        contentFit="cover"
        source={require('../assets/vector-36.png')}
      />
      <Text style={[styles.pagamento, styles.r5318Typo]}>Pagamento</Text>
      <Text style={[styles.total, styles.totalFlexBox]}>Total</Text>
      <Text style={[styles.pagueAt, styles.s1630Position]}>Pague até</Text>
      <Text style={[styles.pixCopiaE, styles.button1Typo]}>Pix Copia e Cola</Text>
      <Text style={[styles.restaurantName, styles.totalFlexBox]}>Código Pix Copia e Cola</Text>
      <View style={[styles.button, styles.buttonPosition]}>
        <Text style={[styles.button1, styles.button1Typo]}>Pagar</Text>
      </View>
      <Text style={[styles.copiarCdigoPix, styles.copiarCdigoPixPosition]}>Copiar código PIX</Text>
      <Image
        style={styles.copyLeftIcon}
        contentFit="cover"
        source={require('../assets/copyleft.png')}
      />
      <Text style={[styles.r5318, styles.totalFlexBox]}>R$ 53,18</Text>
      <Text style={[styles.s1630, styles.s1630Position]}>01/05 ás 16:30</Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require('../assets/group-39.png')}
        />
        <Image
          style={styles.image49Icon}
          contentFit="cover"
          source={require('../assets/image-49.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  copiarCdigoPixPosition: {
    fontSize: FontSize.size_xs,
    left: '50%',
    position: 'absolute',
  },
  r5318Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
  },
  buttonPosition: {
    height: 42,
    left: '50%',
    position: 'absolute',
  },
  paymentBorder: {
    borderColor: Color.colorDeepskyblue,
    borderStyle: 'solid',
  },
  totalFlexBox: {
    letterSpacing: 1,
    textAlign: 'left',
    position: 'absolute',
  },
  s1630Position: {
    top: 171,
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.colorBlack,
    position: 'absolute',
  },
  button1Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
  },
  groupLayout: {
    height: 200,
    width: 200,
    position: 'absolute',
  },
  brgovbcbpix256: {
    marginLeft: -132,
    top: 577,
    fontSize: 14,
    width: 265,
    height: 17,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: '50%',
    position: 'absolute',
  },
  instrues: {
    color: '#ff0000',
  },
  blankLine: {
    color: Color.colorBlack,
  },
  paraFinalizarA: {
    color: Color.second,
  },
  paraFinalizarACompraCopie: {
    fontFamily: FontFamily.poppinsRegular,
  },
  instruesParaFinalizarAContainer: {
    marginLeft: -159,
    width: 318,
    textAlign: 'center',
    top: 440,
  },
  paymentChild: {
    marginLeft: -151,
    top: 559,
    borderRadius: 5,
    backgroundColor: 'rgba(217, 217, 217, 0)',
    borderWidth: 2,
    width: 303,
    borderColor: Color.colorDeepskyblue,
    borderStyle: 'solid',
  },
  paymentItem: {
    bottom: 713,
    backgroundColor: '#272626',
    borderWidth: 1,
    width: 360,
    height: 87,
    left: 0,
    position: 'absolute',
  },
  paymentInner: {
    top: 50,
    left: 26,
    width: 12,
    height: 20,
    position: 'absolute',
  },
  pagamento: {
    marginLeft: -59,
    top: 44,
    fontSize: 20,
    letterSpacing: 0,
    color: Color.colorWhite,
    textAlign: 'left',
    left: '50%',
    position: 'absolute',
  },
  total: {
    fontSize: FontSize.size_lg,
    letterSpacing: 1,
    left: 20,
    fontFamily: FontFamily.poppinsRegular,
    top: 121,
    color: Color.colorBlack,
  },
  pagueAt: {
    left: 20,
    fontFamily: FontFamily.poppinsRegular,
  },
  pixCopiaE: {
    marginLeft: -78,
    top: 227,
    letterSpacing: 1,
    textAlign: 'left',
    position: 'absolute',
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: '50%',
  },
  restaurantName: {
    marginTop: 162,
    width: '51.11%',
    top: '50%',
    left: '9.72%',
    fontSize: 10,
    opacity: 0.3,
    color: Color.second,
    fontFamily: FontFamily.poppinsRegular,
  },
  button1: {
    fontSize: 16,
    display: 'none',
    color: Color.colorWhite,
    textAlign: 'center',
  },
  button: {
    marginLeft: -130,
    top: 626,
    borderRadius: 12,
    backgroundColor: Color.colorDeepskyblue,
    width: 261,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  copiarCdigoPix: {
    marginLeft: -54,
    top: 638,
    width: 108,
    color: Color.colorWhite,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
  },
  copyLeftIcon: {
    top: 635,
    left: 239,
    width: 24,
    height: 24,
    position: 'absolute',
  },
  r5318: {
    left: 255,
    color: Color.colorDeepskyblue,
    fontSize: FontSize.size_lg,
    letterSpacing: 1,
    top: 121,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
  },
  s1630: {
    left: 198,
    width: 136,
    height: 27,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
  },
  groupChild: {
    top: -200,
    left: 0,
  },
  image49Icon: {
    height: '80.5%',
    width: '80.5%',
    top: '-89%',
    right: '8%',
    bottom: '108.5%',
    left: '11.5%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  groupParent: {
    left: 80,
    opacity: 0.5,
    top: 440,
  },
  payment: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default Payment;
