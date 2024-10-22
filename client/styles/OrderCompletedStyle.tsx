import { StyleSheet } from 'react-native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';

const styles = StyleSheet.create({
    
    verItensCompradosFlexBox: {
      textAlign: 'center',
      position: 'absolute',
    },

    ordercompletedChild: {
      marginLeft: -114,
      top: 579,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 4,
      elevation: 4,
      shadowOpacity: 1,
      borderRadius: 12,
      backgroundColor: Color.colorDeepskyblue,
      width: 229,
      height: 54,
      left: '50%',
      position: 'absolute',
    },

    verItensComprados: {
      top: 584,
      left: 85,
      fontSize: 15,
      fontWeight: '600',
      fontFamily: FontFamily.poppinsSemiBold,
      color: Color.colorWhite,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 198,
      height: 44,
    },

    logotipoPretoSemFundo1: {
      marginLeft: -59,
      top: 54,
      width: 118,
      height: 165,
      left: '50%',
      position: 'absolute',
    },

    pagamentoAprovado: {
      marginLeft: -117,
      top: 419,
      fontSize: 20,
      fontWeight: '700',
      fontFamily: FontFamily.poppinsBold,
      color: Color.colorDeepskyblue,
      left: '50%',
    },

    iconCheckmarkCircle: {
      height: '15%',
      width: '33.33%',
      top: '34.5%',
      right: '33.33%',
      bottom: '50.5%',
      left: '33.33%',
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      overflow: 'hidden',
    },

    ordercompleted: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: '100%',
      height: 800,
      overflow: 'hidden',
    },

});

export default styles;''