import { StyleSheet } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Estilo para o logotipo na parte superior
  logotipopretosemfundoIcon: {
    marginTop: 40,
    width: 145,
    height: 202,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  // Texto de instrução no meio
  iniciarTexto: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#333',
    fontFamily: FontFamily.poppinsRegular,
  },
  cdigoDeBarras: {
    color: Color.colorDeepskyblue,
    fontWeight: '700',
  },
  // Botão do código de barras logo abaixo do texto de instrução
  barcodeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  // Texto na parte inferior da tela
  tutorialTexto: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    fontFamily: FontFamily.poppinsRegular,
  },
  cliqueAqui: {
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.poppinsBold,
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});

export default styles;
