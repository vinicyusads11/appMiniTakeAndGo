// TODO: estilizar e renomear este componente
import * as React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/ContactStyle';

const Contact = () => {
  return (
    <View style={styles.contact}>
      <Image
        style={styles.contactItem}
        contentFit="cover"
        source={require('../assets/vector-36.png')}
      />

      <Image
        style={[styles.image14Icon, styles.image14IconPosition]}
        contentFit="cover"
        source={require('../assets/whatsappicon.png')}
      />

      <Text style={styles.algumProblemaOu}>Algum problema ou dúvida?</Text>

      <Text style={[styles.cliqueNoConeContainer, styles.textTypo]}>
        <Text style={styles.cliqueNo}>Clique no</Text>

        <Text style={styles.coneTypo}>{` ícone `}</Text>

        <Text style={styles.cliqueNo}>e entre em contato:</Text>
      </Text>

      <Text style={[styles.text, styles.coneTypo]}>+55 (48) 98800-2368</Text>

      <Image
        style={[styles.logotipoPretoSemFundo1, styles.image14IconPosition]}
        contentFit="cover"
        source={require('../assets/logopretosemfundo.png')}
      />
    </View>
  );
};

export default Contact;
