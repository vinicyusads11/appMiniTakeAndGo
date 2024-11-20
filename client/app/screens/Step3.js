import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import ProgressBar from '../../components/ProgressBar';

const Step3 = () => {
  const router = useRouter();
  return (
    <View style={styles.step3}>
      <ProgressBar step={3} />

      <Text style={styles.umCdigoqrCode}>
        Ao confirmar sua compra, um código Pix será gerado, você poderá escanear ou copiá-lo para pagar
      </Text>

      <Image
        style={styles.cestaIcon}
        contentFit="cover"
        source={require('../../assets/cestacomprasicon.png')}
      />

      <Text style={styles.agoraS}>
        Aí é só pagar, levar seus produtos e aproveitar!
      </Text>

      <TouchableOpacity style={styles.prximo} onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.prximoTexto}>Ir às compras!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => router.push('../screens/Step2')}>
        <Text style={styles.voltarTexto}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  step3: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginTop: 135,
  },

  umCdigoqrCode: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fffffff',
    width: '80%',
    marginBottom: 30,
  },

  agoraS: {
    fontSize: 18,
    textAlign: 'center',
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
  },

  cestaIcon: {
    width: 200,
    height: 200,
    marginBottom: 20, // Ajuste para espaço mais uniforme
  },

  prximo: {
    backgroundColor: '#3cb3f6',
    paddingVertical: 20,
    paddingHorizontal: 60, // Botão maior para chamar mais atenção
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
  },

  prximoTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  voltar: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    backgroundColor: '#3cb3f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  voltarTexto: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Step3;
