import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contêiner da tela
  step1: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  // Texto de instrução principal
  aponteACmeraContainer: {
    textAlign: 'center',
    fontSize: 18,
    color: '#3cb3f6',
    width: '80%',
    marginBottom: 30,
  },

  // Imagem de instrução principal
  girlscanqrcodeIcon: {
    width: 250,
    height: 180,
    marginBottom: 40,
  },

  // Etapas de progresso
  bola1: { left: 80, width: 30, height: 30, top: 96, position: 'absolute' },
  bola2: { left: 180 },
  bola3: { left: 280 },
  lineView: { left: 150 },
  lineViewLayout: {
    height: 1,
    width: 36,
    borderTopWidth: 1,
    borderColor: '#3cb3f6',
    borderStyle: 'solid',
    top: 111,
    position: 'absolute',
  },

  // Botão PRÓXIMO (à direita, seguindo o estilo de Welcome.js)
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

  // Botão VOLTAR (à esquerda, seguindo o mesmo estilo)
  voltar: {
    position: 'absolute',
    bottom: 80,
    left: 20,
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
  voltarTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Texto de indicação de etapa
  text: {
    left: 110,
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    top: 99,
    textAlign: 'left',
    position: 'absolute',
  },
});

export default styles;
