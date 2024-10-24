import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const styles = StyleSheet.create({

  image14IconPosition: {
    left: '50%',
    position: 'absolute',
  },

  textTypo: {
    fontSize: FontSize.size_mini,
    textAlign: 'center',
    left: '50%',
    position: 'absolute',
  },

  coneTypo: {
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
  },

  contactChild: {
    bottom: 713,
    left: 0,
    backgroundColor: '#272626',
    borderStyle: 'solid',
    borderColor: Color.colorDeepskyblue,
    borderWidth: 1,
    width: 360,
    height: 87,
    position: 'absolute',
  },

  contactItem: {
    top: 50,
    left: 26,
    width: 12,
    height: 20,
    position: 'absolute',
  },

  faleConosco: {
    marginLeft: -66,
    top: 44,
    letterSpacing: 0,
    color: Color.colorWhite,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    left: '50%',
    position: 'absolute',
  },

  image14Icon: {
    marginLeft: -105,
    top: 501,
    width: 47,
    height: 53,
  },

  algumProblemaOu: {
    marginLeft: -147,
    top: 390,
    textAlign: 'center',
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    left: '50%',
    position: 'absolute',
  },

  cliqueNo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
  },

  cliqueNoConeContainer: {
    marginLeft: -134,
    top: 478,
  },

  text: {
    marginLeft: -58,
    top: 517,
    fontSize: FontSize.size_mini,
    textAlign: 'center',
    left: '50%',
    position: 'absolute',
  },

  logotipoPretoSemFundo1: {
    marginLeft: -61,
    top: 196,
    width: 121,
    height: 175,
  },

  contact: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },

});

export default styles;
