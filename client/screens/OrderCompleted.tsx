import * as React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/OrderCompletedStyle';

const OrderCompleted = () => {
  return (
    <View style={styles.ordercompleted}>
      <View style={styles.ordercompletedChild} />
      <Text style={[styles.verItensComprados, styles.verItensCompradosFlexBox]}>
        Ver itens comprados
      </Text>
      <Image
        style={styles.logotipoPretoSemFundo1}
        contentFit="cover"
        source={require('../assets/logopretosemfundo.png')}
      />
      <Text style={[styles.pagamentoAprovado, styles.verItensCompradosFlexBox]}>
        Pagamento aprovado!
      </Text>
      <Image
        style={styles.iconCheckmarkCircle}
        contentFit="cover"
        source={require('../assets/checkmarkicon.png')}
      />
    </View>
  );
};

export default OrderCompleted;
