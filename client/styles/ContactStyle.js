import { StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

const styles = StyleSheet.create({
  contact: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    paddingVertical: 40,
  },

  // Botão de voltar
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 10,
  },
  contactItem: {
    width: 24,
    height: 35,
  },

  // Logotipo
  logotipoPretoSemFundo1: {
    width: 150,
    height: 215,
  },

  algumProblemaOu: {
    fontSize: 30,
    fontWeight: '700',
    color: Color.colorDarkslategray,
    textAlign: 'center',
    marginVertical: 10,
  },

  cliqueNoConeContainer: {
    fontSize: 20,
    color: Color.colorDarkslategray,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    fontWeight:'bold',
  },
  coneTypo: {
    color: Color.colorDeepskyblue,
    fontWeight: '700',
  },

  // Ícone e número do WhatsApp
  whatsappContainer: {
    alignItems: 'center',
  },
  whatsappIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 20,
    color: Color.colorDeepskyblue,
    fontWeight: '600',
  },
});

export default styles;
