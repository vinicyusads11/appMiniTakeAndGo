import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const styles = StyleSheet.create({
  containerPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  cliqueAquiTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  homeChildPosition: {
    position: "absolute",
    left: "50%",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  desejaVerO: {
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  desejaVerOTutoralDeCompra: {
    color: Color.colorGray,
  },
  cliqueAqui: {
    color: Color.colorDeepskyblue,
  },
  desejaVerOContainer: {
    marginLeft: -100,
    bottom: 62,
    fontSize: 13,
    width: 199,
  },
  cdigoDeBarras: {
    color: Color.colorDeepskyblue,
  },
  abaixo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray,
  },
  paraIniciarSuaContainer: {
    marginLeft: -132,
    bottom: 430,
    fontSize: 20,
    width: 264,
  },
  homeChild: {
    marginLeft: -75,
    top: 405,
    width: 150,
    height: 150,
    left: "50%",
  },
  vectorIcon: {
    height: "11.13%",
    marginLeft: -52,
    top: "53.88%",
    bottom: "35%",
    width: 104,
    left: "50%",
  },
  groupIcon: {
    height: "5.18%",
    width: "15.56%",
    top: "56.74%",
    right: "42.22%",
    bottom: "38.09%",
    left: "42.22%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  logotipopretosemfundoIcon: {
    marginLeft: -73,
    top: 30,
    width: 145,
    height: 202,
    left: "50%",
  },
  home: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default styles;
