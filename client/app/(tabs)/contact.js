import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Contact = () => {
  const router = useRouter();

  const openWhatsApp = () => {
    const phoneNumber = '+5548988002368';
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      alert('Não foi possível abrir o WhatsApp');
    });
  };

  return (
    <View style={styles.contact}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/home')}>
        <Icon name="arrow-left" size={50} color="#3CB3F6" />
      </TouchableOpacity>

      <Image
        style={styles.logotipoPretoSemFundo1}
        contentFit="cover"
        source={require('../../assets/logopretosemfundo.png')}
      />

      <Text style={styles.algumProblemaOu}>Surgiu algum problema ou dúvida?</Text>

      <Text style={styles.cliqueNoConeContainer}>
        Clique no <Text style={styles.coneTypo}>ícone</Text> do WhatsApp abaixo e entre em contato conosco:
      </Text>

      <TouchableOpacity style={styles.whatsappContainer} onPress={openWhatsApp}>
        <Image
          style={styles.whatsappIcon}
          contentFit="cover"
          source={require('../../assets/whatsappicon.png')}
        />
        <Text style={styles.phoneNumber}>+55 (48) 98800-2368</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    backgroundColor: '#FFFFFF',
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
    marginTop: -85,
    marginBottom: 280,
  },

  algumProblemaOu: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 0,
    marginTop: -200,
  },

  cliqueNoConeContainer: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  coneTypo: {
    color: '#00BFFF', 
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
    color: '#00BFFF', 
    fontWeight: '600',
  },
});

export default Contact;
