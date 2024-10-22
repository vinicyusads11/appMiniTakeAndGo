import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border, Padding } from '../GlobalStyles';

const styles = StyleSheet.create({
    step3Layout: {
      height: 30,
      width: 30,
      position: 'absolute',
    },

    textTypo: {
      color: Color.colorWhite,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
    },
    
    text1Clr: {
      color: Color.colorGray,
      fontSize: FontSize.size_xs,
    },

    text1Position: {
      left: '50%',
      position: 'absolute',
    },

    text1Layout: {
      width: 204,
      marginLeft: -12,
    },

    agoraSTypo: {
      fontSize: FontSize.size_3xs,
      textAlign: 'center',
      left: '50%',
      color: Color.colorGray,
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

    step3Child: {
      left: 280,
      top: 96,
    },

    text: {
      left: 290,
      fontSize: FontSize.size_xl,
      textAlign: 'left',
      top: 99,
      position: 'absolute',
    },

    step3Item: {
      left: 120,
      top: 96,
    },

    step3Inner: {
      left: 200,
      top: 96,
    },

    voltar1: {
      width: 45,
      height: 18,
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorGray,
      fontSize: FontSize.size_xs,
      textAlign: 'left',
    },

    voltar: {
      left: 40,
      top: 753,
      position: 'absolute',
    },

    umCdigoqrCode: {
      marginLeft: -107,
      top: 446,
      width: 214,
      height: 47,
      textAlign: 'center',
      color: Color.colorGray,
      fontSize: FontSize.size_xs,
      left: '50%',
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
    },

    text1: {
      top: 489,
      height: 39,
      textAlign: 'center',
      left: '50%',
      position: 'absolute',
      color: Color.colorGray,
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.poppinsRegular,
    },

    agoraS: {
      top: 492,
      fontWeight: '500',
      fontFamily: FontFamily.poppinsMedium,
      height: 17,
      width: 204,
      marginLeft: -102,
    },

    button1: {
      fontSize: 11,
      textAlign: 'center',
    },

    button: {
      top: 560,
      left: 55,
      borderRadius: 12,
      backgroundColor: Color.colorDeepskyblue,
      width: 317,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Padding.p_xl,
      paddingVertical: Padding.p_mini,
      position: 'absolute',
    },

    jTenhoUma: {
      marginLeft: -40,
      top: 617,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
      fontSize: FontSize.size_3xs,
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

    lineView: {
      left: 158,
    },

    step3Child1: {
      left: 238,
    },

    rectangleIcon: {
      marginLeft: -99,
      top: 238,
      borderRadius: 20,
      width: 198,
      height: 198,
    },

    groupIcon: {
      top: 405,
      left: 295,
    },
    
    step3: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      height: 800,
      overflow: 'hidden',
      width: '100%',
    },

});

export default styles;