import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border, Padding } from '../GlobalStyles';

const styles = StyleSheet.create({

    inputPosition: {
      paddingBottom: Padding.p_xl,
      paddingRight: Padding.p_16xl,
      paddingTop: Padding.p_xl,
      paddingLeft: Padding.p_xl,
      borderWidth: 1,
      borderColor: Color.colorDeepskyblue,
      borderRadius: Border.br_10xs,
      alignItems: 'center',
      flexDirection: 'row',
      height: 40,
      width: '90%',
      borderStyle: 'solid',
      backgroundColor: Color.colorWhite,
    },

    groupIconLayout: {
      maxWidth: '100%',
      width: '4.89%',
      height: '1.51%',
      maxHeight: '100%',
      position: 'absolute',
      overflow: 'hidden',
    },

    buttonLayout: {
      borderRadius: Border.br_xs,
      width: 317,
      position: 'absolute',
    },

    comTypo: {
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
      textAlign: 'center',
    },

    qualClr: {
      color: Color.colorBlack,
      textAlign: 'center',
      position: 'absolute',
    },

    registerPosition: {
      top: 560,
      position: 'absolute',
    },

    placeholder: {
      fontWeight: '500',
      fontFamily: FontFamily.poppinsMedium,
      color: Color.colorDimgray,
      textAlign: 'center',
      fontSize: FontSize.size_3xs,
    },

    input: {
      top: '35%',
      left: 22,
    },

    input1: {
      top: '45%',
      left: 22,
    },

    input2: {
      top: '52%',
      left: 22,
    },

    input3: {
      top: '60%',
      left: 22,
    },

    inputWrapper: {
      top: '50%',
      height: 40,
      width: 317,
      left: 22,
      position: 'absolute',
    },

    groupIcon: {
      top: '39.88%',
      right: '7.89%',
      bottom: '58.61%',
      left: '70.22%',
      maxHeight: '100%',
    },

    button1: {
      color: Color.colorWhite,
      fontSize: FontSize.size_base,
    },

    button: {
      marginLeft: -158,
      top: 482,
      backgroundColor: Color.colorDeepskyblue,
      justifyContent: 'center',
      paddingHorizontal: Padding.p_xl,
      paddingVertical: 15,
      left: '50%',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: Border.br_xs,
      height: 40,
    },

    ouEntreCom: {
      marginLeft: -31,
      top: 553,
      fontSize: 9,
      color: Color.colorDarkslategray,
      left: '50%',
      position: 'absolute',
    },

    jTemConta: {
      color: Color.colorDarkslategray,
    },

    entrar: {
      color: Color.colorDeepskyblue,
    },

    text: {
      marginLeft: -62,
      fontSize: 12,
      fontFamily: FontFamily.poppinsRegular,
      textAlign: 'center',
    },

    jTemContaContainer: {
      top: 689,
      left: '50%',
      position: 'absolute',
    },

    registerChild: {
      top: '79%',
      height: 35,
      left: '12%',
    },

    image7Icon: {
      top: '80%',
      left: '30%',
      width: 20,
      height: 20,
      position: 'absolute',
    },

    continuarComGoogle: {
      top: '80.5%',
      left: '37%',
      color: Color.colorDarkslategray,
      fontSize: FontSize.size_3xs,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
      position: 'absolute',
    },
    
    qualOSeu: {
      top: 121,
      fontSize: FontSize.size_smi,
      color: Color.colorBlack,
      fontFamily: FontFamily.poppinsRegular,
      left: 22,
    },

    qualOSeu1: {
      top: 203,
      fontSize: FontSize.size_smi,
      color: Color.colorBlack,
      fontFamily: FontFamily.poppinsRegular,
      left: 22,
    },
    
    crieUmaSenha: {
      top: 282,
      fontSize: FontSize.size_smi,
      color: Color.colorBlack,
      fontFamily: FontFamily.poppinsRegular,
      left: 22,
    },

    groupIcon1: {
      top: '50.25%',
      right: '8.72%',
      bottom: '48.24%',
      left: '86.39%',
      maxHeight: '100%',
    },

    confirmarSenha: {
      top: 362,
      fontSize: FontSize.size_smi,
      color: Color.colorBlack,
      fontFamily: FontFamily.poppinsRegular,
      left: 22,
    },

    registerItem: {
      left: 26,
      borderColor: '#b1b1b1',
      borderTopWidth: 1,
      width: 97,
      height: 1,
      borderStyle: 'solid',
      top: 560,
    },

    registerInner: {
      left: 237,
      width: 96,
      maxHeight: '100%',
    },

    crieUmaConta: {
      marginLeft: -135,
      top: 44,
      fontWeight: '700',
      fontFamily: FontFamily.poppinsBold,
      width: 269,
      fontSize: FontSize.size_base,
      left: '50%',
    },

    register: {
      flex: 1,
      width: '100%',
      height: 800,
      overflow: 'hidden',
      backgroundColor: Color.colorWhite,
    },

});

export default styles;