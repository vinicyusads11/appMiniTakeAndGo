import * as React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/PaymentStyle';

const Payment = () => {
  return (
    <View style={styles.payment}>
      <Text style={styles.brgovbcbpix256}>02020303012923013br.gov.bcb.pix256..</Text>
      <Text style={[styles.instruesParaFinalizarAContainer, styles.copiarCdigoPixPosition]}>
        <Text style={[styles.instrues, styles.r5318Typo]}>Instruções:</Text>
        <Text style={styles.paraFinalizarACompraCopie}>
          <Text style={styles.blankLine}> </Text>
          <Text
            style={styles.paraFinalizarA}
          >{`Para finalizar a compra, copie e cole o código abaixo no seu aplicativo de pagamento de sua preferência. Após isso, sua compra será aprovada em instantes. `}</Text>
        </Text>
      </Text>
      <View style={[styles.paymentChild, styles.buttonPosition]} />
      <View style={[styles.paymentItem, styles.paymentBorder]} />
      <Image
        style={styles.paymentInner}
        contentFit="cover"
        source={require('../assets/vector-36.png')}
      />
      <Text style={[styles.pagamento, styles.r5318Typo]}>Pagamento</Text>
      <Text style={[styles.total, styles.totalFlexBox]}>Total</Text>
      <Text style={[styles.pagueAt, styles.s1630Position]}>Pague até</Text>
      <Text style={[styles.pixCopiaE, styles.button1Typo]}>Pix Copia e Cola</Text>
      <Text style={[styles.restaurantName, styles.totalFlexBox]}>Código Pix Copia e Cola</Text>
      <View style={[styles.button, styles.buttonPosition]}>
        <Text style={[styles.button1, styles.button1Typo]}>Pagar</Text>
      </View>
      <Text style={[styles.copiarCdigoPix, styles.copiarCdigoPixPosition]}>Copiar código PIX</Text>
      <Image
        style={styles.copyLeftIcon}
        contentFit="cover"
        source={require('../assets/copyleft.png')}
      />
      <Text style={[styles.r5318, styles.totalFlexBox]}>R$ 53,18</Text>
      <Text style={[styles.s1630, styles.s1630Position]}>01/05 ás 16:30</Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require('../assets/group-39.png')}
        />
        <Image
          style={styles.image49Icon}
          contentFit="cover"
          source={require('../assets/image-49.png')}
        />
      </View>
    </View>
  );
};

export default Payment;
