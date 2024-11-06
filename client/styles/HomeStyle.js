import { StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

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
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginLeft:50,
    marginRight:50,
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
    marginBottom: 50,
    fontWeight: 'regular',
  },
  cliqueAqui: {
    color: Color.colorDeepskyblue,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
