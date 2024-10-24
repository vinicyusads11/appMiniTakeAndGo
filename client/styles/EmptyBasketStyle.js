import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const styles = StyleSheet.create({

    cestaPosition: {
      left: '50%',
      position: 'absolute',
    },
    emptybasketChild: {
      bottom: 713,
      left: 0,
      backgroundColor: '#272626',
      borderStyle: 'solid',
      borderColor: '#3cb3f6',
      borderWidth: 1,
      width: 360,
      height: 87,
      position: 'absolute',
    },
    emptybasketItem: {
      top: 50,
      left: 26,
      width: 12,
      height: 20,
      position: 'absolute',
    },
    cesta: {
      marginLeft: -30,
      top: 44,
      fontSize: 20,
      letterSpacing: 0,
      fontWeight: '700',
      fontFamily: FontFamily.poppinsBold,
      color: Color.colorWhite,
      textAlign: 'left',
    },
    restaurantName: {
      marginTop: -21,
      marginLeft: -70,
      top: '50%',
      fontSize: 14,
      letterSpacing: 1,
      fontWeight: '500',
      fontFamily: FontFamily.poppinsMedium,
      color: Color.second,
      textAlign: 'center',
      width: 140,
      opacity: 0.3,
    },
    emptybasket: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: '100%',
      height: 800,
      overflow: 'hidden',
    },

});
  
  export default styles;
