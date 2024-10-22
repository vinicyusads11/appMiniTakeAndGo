import * as React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles/EmptyBasketStyle';


const EmptyBasket = () => {
  return (
    <View style={styles.emptybasket}>
      <View style={styles.emptybasketChild} />
      <Image
        style={styles.emptybasketItem}
        contentFit="cover"
        source={require('../../assets/vector-36.png')}
      />
      <Text style={[styles.cesta, styles.cestaPosition]}>Cesta</Text>
      <Text style={[styles.restaurantName, styles.cestaPosition]}>A Cesta está vazia</Text>
    </View>
  );
};

export default EmptyBasket;
