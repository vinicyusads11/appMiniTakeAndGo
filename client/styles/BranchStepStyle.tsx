import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily } from '../GlobalStyles';

const styles = StyleSheet.create({

    filialFlexBox: {
      textAlign: 'left',
      letterSpacing: 0,
      position: 'absolute',
    },

    umCdigoqrCodeTypo: {
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
      fontSize: FontSize.size_sm,
      color: Color.colorGray,
      left: '50%',
    },

    containerFlexBox: {
      textAlign: 'center',
      position: 'absolute',
    },

    textTypo: {
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: '500',
    },

    miniTypo: {
      fontFamily: FontFamily.poppinsBold,
      fontWeight: '700',
    },

    identifiqueAFilial: {
      marginLeft: -69,
      top: 50,
      fontSize: 16,
      color: Color.colorGray,
      fontFamily: FontFamily.poppinsBold,
      fontWeight: '700',
      left: '50%',
    },

    branchstepChild: {
      marginLeft: -110,
      top: 670,
      borderRadius: 12,
      borderStyle: 'solid',
      borderColor: Color.colorDeepskyblue,
      borderWidth: 1,
      width: 219,
      height: 32,
      left: '50%',
      position: 'absolute',
      backgroundColor: Color.colorWhite,
    },

    acessarFilialVia: {
      marginLeft: -100,
      top: 676,
      width: 175,
      textAlign: 'left',
      letterSpacing: 0,
      position: 'absolute',
    },

    branchstepItem: {
      top: 671,
      left: 275,
      width: 30,
      height: 30,
      position: 'absolute',
    },

    umCdigoqrCode: {
      marginLeft: -112,
      top: 210,
      width: 224,
      height: 18,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: '600',
      fontSize: FontSize.size_sm,
      color: Color.colorGray,
      left: '50%',
    },

    agoraPrecisamosIdentificar: {
      color: Color.colorGray,
    },

    mini: {
      color: Color.colorDeepskyblue,
    },

    agoraPrecisamosIdentificarE: {
      fontSize: 11,
    },

    blankLine1: {
      fontSize: FontSize.size_3xs,
    },

    agoraPrecisamosIdentificarContainer: {
      top: 452,
      left: 59,
      width: 243,
      height: 33,
    },

    image5Icon: {
      marginLeft: -99,
      top: 241,
      borderRadius: 500,
      width: 198,
      height: 198,
      left: '50%',
      position: 'absolute',
    },

    porFavorAponte: {
      fontFamily: FontFamily.poppinsRegular,
    },

    porFavorAponteSuaCmeraE: {
      color: Color.colorGray,
    },

    porFavorAponteContainer: {
      marginLeft: -106,
      top: 592,
      width: 211,
      height: 62,
      fontSize: FontSize.size_3xs,
      left: '50%',
    },

    branchstep: {
      flex: 1,
      width: '100%',
      height: 800,
      overflow: 'hidden',
      backgroundColor: Color.colorWhite,
    },

  });

  export default styles;
