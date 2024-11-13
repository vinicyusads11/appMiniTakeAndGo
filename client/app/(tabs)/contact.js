import * as React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/ContactStyle';
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

      <Text style={styles.algumProblemaOu}>Algum problema ou dúvida?</Text>

      <Text style={styles.cliqueNoConeContainer}>
        Clique no <Text style={styles.coneTypo}>ícone</Text> abaixo e entre em contato:
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

export default Contact;
