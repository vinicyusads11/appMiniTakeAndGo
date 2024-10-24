import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const styles = StyleSheet.create({

    botaoProximo: {
      textAlign: 'left',
      color: Color.colorGray,
    },

    sigaAquiComTypo: {
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
      left: '50%',
      position: 'absolute',
    },
    
    bemVindoAMiniPosition: {
      left: '50%',
      position: 'absolute',
    },

    bemVindoAMini: {
      marginLeft: -30,
      top: 395,
      fontSize: 11,
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorGray,
      left: '50%',
      position: 'absolute',
    },

    suaNovaForma: {
      marginLeft: -80,
      top: 420,
      fontSize: 13,
      textAlign: 'center',
      color: Color.colorGray,
    },

    sigaAquiCom: {
      marginLeft: -134,
      top: 505,
      fontSize: 15,
      color: '#3cb3f6',
      textAlign: 'center',
      width: 264,
    },

    prximo1: {
      fontSize: 12,
      width: 58,
      height: 20,
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorGray,
    },

    prximo: {
      left: 345,
      top: 751,
      position: 'absolute',
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

    logotipoPreto: {
      marginLeft: -93,
      top: 112,
      width: 187,
      height: 264,
    },

    welcome: {
      backgroundColor: '#fff',
      flex: 1,
      height: 800,
      overflow: 'hidden',
      width: '100%',
    },
    
});

export default styles;