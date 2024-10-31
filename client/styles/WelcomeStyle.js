import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contêiner da tela
  welcome: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50, // Adiciona espaçamento superior e inferior para evitar cortes
    paddingHorizontal: 20,
  },

  // Logotipo - Removido marginTop para evitar cortes
  logotipoPreto: {
    width: 200,
    height: 280,
    marginBottom: 40,
  },

  // Texto principal "Bem-vindo à MINI"
  bemVindoAMini: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3cb3f6', // Cor azul para destaque
    textAlign: 'center',
    marginBottom: 10,
  },

  // Subtítulo "Sua nova forma de fazer compras"
  suaNovaForma: {
    fontSize: 18,
    color: '#555', // Cor de texto suave
    textAlign: 'center',
    marginBottom: 15,
  },

  // Texto do tutorial
  sigaAquiCom: {
    fontSize: 16,
    color: '#3cb3f6',
    textAlign: 'center',
    width: '80%',
    marginBottom: 20,
  },

  // Botão PRÓXIMO - Subido para uma posição intermediária no canto inferior direito
  prximo: {
    position: 'absolute',
    bottom: 80, // Subido um pouco em relação ao fundo
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
