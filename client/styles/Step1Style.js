import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const styles = StyleSheet.create({

    prximoPosition: {
      top: 751,
      position: 'absolute',
    },

    prximo1Typo: {
      textAlign: 'left',
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorGray,
      fontSize: FontSize.size_xs,
    },

    step1Layout: {
      width: 31,
      height: 30,
      top: 96,
      position: 'absolute',
    },

    lineViewLayout: {
      height: 1,
      width: 36,
      borderTopWidth: 1,
      borderColor: Color.colorDeepskyblue,
      borderStyle: 'solid',
      top: 111,
      position: 'absolute',
    },
  
    aponteACmera: {
      fontWeight: '500',
      fontFamily: FontFamily.poppinsMedium,
      color: Color.colorGray,
    },

    cdigoDeBarras: {
      fontWeight: '700',
      fontFamily: FontFamily.poppinsBold,
      color: Color.colorDeepskyblue,
    },

    aponteACmeraContainer: {
      marginLeft: -102,
      top: 434,
      left: '50%',
      textAlign: 'center',
      width: 204,
      height: 58,
      fontSize: FontSize.size_xs,
      position: 'absolute',
    },

    prximo1: {
      width: 57,
      height: 18,
    },

    prximo: {
      left: 345,
    },

    voltar1: {
      width: 47,
      height: 13,
    },

    voltar: {
      left: 40,
    },

    icon: {
      height: '100%',
      width: '100%',
    },

    crossblue: {
      left: 375,
      top: 23,
      width: 30,
      height: 30,
      position: 'absolute',
    },

    girlscanqrcodeIcon: {
      top: 241,
      left: 70,
      borderRadius: 10,
      width: 290,
      height: 162,
      position: 'absolute',
    },

    bola1: {
      left: 100,
      width: 30,
      height: 30,
      top: 96,
      position: 'absolute',
    },

    text: {
      left: 110,
      fontSize: 20,
      fontWeight: '600',
      fontFamily: FontFamily.poppinsSemiBold,
      color: Color.colorWhite,
      top: 99,
      textAlign: 'left',
      position: 'absolute',
    },

    bola2: {
      left: 200,
    },

    bola3: {
      left: 300,
    },

    lineView: {
      left: 250,
    },

    step1Child1: {
      left: 200,
    },

    vectorIcon: {
      top: 300,
      left: 265,
      width: 42,
      height: 23,
      position: 'absolute',
    },

    step1Child2: {
      top: 302,
      left: 266,
      width: 43,
      height: 40,
      position: 'absolute',
    },

    image51Icon: {
      top: 279,
      left: 262,
      width: 53,
      height: 67,
      position: 'absolute',
    },

    groupIcon: {
      height: '1.5%',
      width: '4.17%',
      top: '39.25%',
      right: '20.56%',
      bottom: '59.25%',
      left: '75.28%',
      maxHeight: '100%',
    },

    step1: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      height: 800,
      overflow: 'hidden',
      width: '100%',
    },

});

  export default styles;