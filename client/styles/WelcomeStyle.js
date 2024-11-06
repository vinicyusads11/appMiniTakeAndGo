import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contêiner da tela
  welcome: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50, 
    paddingHorizontal: 20,
  },

  logotipoPreto: {
    width: 200,
    height: 280,
    marginBottom: 20, 
  },

  // Texto principal "Bem-vindo à MINI"
  bemVindoAMini: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#3cb3f6',
    textAlign: 'center',
    marginBottom: 20, 
  },

  // Subtítulo "Sua nova forma de fazer compras"
  suaNovaForma: {
    fontSize: 20, 
    textAlign: 'center',
    marginBottom: 15,
  },

  // Texto do tutorial
  sigaAquiCom: {
    fontSize: 18, 
    color: '#3cb3f6',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    marginBottom: 20,
  },

  skipButton: {
    position: 'absolute', 
    top: 20,
    right: 20,
  },
  
  skipText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Botão PRÓXIMO
  prximo: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  prximoTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
