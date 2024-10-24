import * as React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/OrderInfoStyle';

const OrderInfo = () => {
  return (
    <View style={styles.orderinfo}>
      <Text style={styles.aquiEstoTodos}>
        Aqui estão todos os produtos que você acabou de comprar!
      </Text>
      <View style={[styles.orderinfoChild, styles.orderinfoShadowBox]} />
      <Text style={[styles.incio, styles.incioFlexBox]}>Início</Text>
      <View style={[styles.orderinfoItem, styles.orderinfoShadowBox]} />
      <Text style={[styles.baixarComprovante, styles.incioFlexBox]}>{`Baixar comprovante `}</Text>
      <View style={styles.orderinfoInner} />
      <View style={styles.rectangleView} />
      <Text style={styles.quantidade}>Quantidade</Text>
      <View style={[styles.orderinfoChild1, styles.orderinfoChildLayout2]} />
      <Text style={[styles.energticoMonster, styles.cupNoodlesLayout]}>Energético Monster</Text>
      <Text style={[styles.r1159, styles.r697Layout]}>R$ 11,59</Text>
      <Text style={[styles.lata350ml, styles.lata350mlClr]}>Lata 350ml</Text>
      <View style={[styles.orderinfoChild2, styles.orderinfoChildLayout1]} />
      <View style={[styles.orderinfoChild3, styles.orderinfoChildLayout]} />
      <Text style={styles.text}>3</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Image
        style={[styles.image52Icon, styles.iconLayout]}
        contentFit="cover"
        source={require('../../assets/image-52.png')}
      />
      <Text style={[styles.cupNoodles, styles.r697Typo]}>Cup Noodles</Text>
      <Text style={[styles.r697, styles.r697Typo]}>R$ 6,97</Text>
      <Text style={[styles.galinhaCaipira69g, styles.r697Typo]}>Galinha caipira 69g</Text>
      <Text style={[styles.quantidade1, styles.quantidadeTypo]}>Quantidade</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <View style={[styles.orderinfoChild4, styles.orderinfoChildLayout2]} />
      <View style={[styles.orderinfoChild5, styles.orderinfoChildLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Text style={[styles.quantidade2, styles.quantidadeTypo]}>Quantidade</Text>
      <Image
        style={styles.image58Icon}
        contentFit="cover"
        source={require('../../assets/image-58.png')}
      />
      <Text style={[styles.chocolateSnickers, styles.r697Typo]}>Chocolate SNICKERS</Text>
      <Text style={[styles.r447, styles.r697Typo]}>R$ 4,47</Text>
      <Text style={[styles.original45g, styles.r697Typo]}>Original 45g</Text>
      <View style={[styles.orderinfoChild6, styles.orderinfoChildLayout1]} />
      <Image
        style={[styles.image53Icon, styles.iconLayout]}
        contentFit="cover"
        source={require('../../assets/image-53.png')}
      />
    </View>
  );
};

export default OrderInfo;
