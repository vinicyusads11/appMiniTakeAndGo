// TODO: estilizar e renomear este componente
import * as React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/HomeStyle';

const Home = () => {
  return (
    <View style={ styles.home }>

      <Text style={ [styles.restante6, styles.restanteFlexBox] }>
        Restante: 6
      </Text>

      <Image
        style={ [styles.homeChild, styles.homeLayout] }
        contentFit="cover"
        source={ require('../assets/quadradobordaazul.png') }
      />

      <Image
        style={ [styles.homeItem, styles.homeLayout] }
        contentFit="cover"
        source={ require('../assets/quadradobordaazul.png') }
      />

      <Text style={ [styles.price, styles.priceTypo] }>
        R$ 8,47
      </Text>

      <Text style={ [styles.restante4, styles.restanteFlexBox] }>
        Restante: 4
      </Text>

      <Text style={ [styles.price1, styles.priceTypo] }>
        R$ 12,47
      </Text>

      <Text style={ [styles.olJohn, styles.restanteFlexBox] }>

        <Text style={ styles.olTypo }>
          {`Olá, `}
        </Text>

        <Text style={ styles.john }>
          John!
        </Text>

        <Text style={ styles.blankLine }> </Text>

      </Text>
      <View style={ [styles.homeInner, styles.lineViewBorder] } />

      <Text style={ [styles.desejaVerOContainer, styles.containerPosition] }>

        <Text style={ styles.desejaVerOTutoralDeCompra }>

          <Text style={ styles.desejaVerO }>
            Deseja ver o tutoral de compra novamente?
          </Text>

          <Text style={ styles.text }>
            {` `}
          </Text>

        </Text>

        <Text style={ [styles.cliqueAqui, styles.priceTypo] }>
          Clique aqui
        </Text>

      </Text>

      <View style={ [styles.lineView, styles.lineViewBorder] } />

      <Text style={ [styles.paraIniciarSuaContainer, styles.containerPosition] }>

        <Text style={ styles.desejaVerOTutoralDeCompra }>

          <Text style={ styles.desejaVerO }>
            Para iniciar sua compra, clique no ícone do
          </Text>

          <Text style={ styles.text }>
            {` `}
          </Text>

        </Text>

        <Text style={ styles.cdigoDeBarras }>

          <Text style={ styles.priceTypo }>
            código de barras
          </Text>

          <Text style={ styles.text }>
            {` `}
          </Text>

        </Text>

        <Text style={ styles.naParteInferior }>
          na parte inferior da tela
        </Text>

      </Text>

      <Text style={ [styles.nossosProdutos, styles.nossosProdutosFlexBox] }>
        Nossos produtos!
      </Text>

      <Image
        style={ [styles.rectangleIcon, styles.homeChild3Position] }
        contentFit="cover"
        source={ require('../assets/quadradobordaazul.png') }
      />

      <Image
        style={ [styles.image52Icon, styles.iconLayout] }
        contentFit="cover"
        source={ require('../assets/image-52.png') }
      />

      <Text style={ [styles.cupNoodles, styles.cupNoodlesTypo] }>
        Cup Noodles
      </Text>

      <Text style={ [styles.restante61, styles.restanteTypo1] }>
        Restante: 6
      </Text>

      <Text style={ [styles.price2, styles.pricePosition1] }>
        R$ 6,97
      </Text>

      <Text style={ [styles.restaurantName, styles.restaurantTypo] }>
        Galinha caipira 69g
      </Text>

      <Text style={ [styles.poVisconti, styles.poViscontiTypo] }>
        Pão Visconti
      </Text>

      <Text style={ styles.restaurantName1 }>
        Tradicional 400g
      </Text>

      <Text style={ [styles.salgadinhoDoritos, styles.poViscontiTypo] }>
        Salgadinho Doritos
      </Text>

      <Text style={ styles.restaurantName2 }>
        Original 84g
      </Text>

      <Image
        style={ [styles.homeChild1, styles.homeChildPosition] }
        contentFit="cover"
        source={ require('../assets/quadradobordaazul.png') }
      />

      <Image
        style={ [styles.image58Icon, styles.iconPosition] }
        contentFit="cover"
        source={ require('../assets/image-58.png') }
      />

      <Text style={ [styles.chocolateSnickers, styles.cervejaHeinekenTypo] }>
        Chocolate SNICKERS
      </Text>

      <Text style={ [styles.restante20, styles.restanteTypo] }>
        Restante: 20
      </Text>

      <Text style={ [styles.price3, styles.pricePosition] }>
        R$ 4,47
      </Text>

      <Text style={ [styles.restaurantName3, styles.restaurantPosition] }>
        Original 45g
      </Text>

      <Image
        style={ [styles.homeChild2, styles.homeChildPosition] }
        contentFit="cover"
        source={ require('../assets/quadradobordaazul.png') }
      />

      <Text style={ [styles.cervejaHeineken, styles.cervejaHeinekenTypo] }>
        Cerveja Heineken
      </Text>

      <Text style={ [styles.restante8, styles.restanteTypo] }>
        Restante: 8
      </Text>

      <Text style={ [styles.price4, styles.pricePosition1] }>
        R$ 7,47
      </Text>

      <Text style={ [styles.restaurantName4, styles.restaurantPosition] }>
        Lata 350ml
      </Text>

      <Image
        style={ [styles.homeChild3, styles.homeChild3Position] }
        contentFit="cover"
        source={ require('../assets/quadradobordaazul.png') }
      />

      <Image
        style={ [styles.image53Icon, styles.iconLayout] }
        contentFit="cover"
        source={ require('../assets/image-53.png') }
      />

      <Text style={ [styles.energticoMonster, styles.cupNoodlesTypo] }>
        Energético Monster
      </Text>

      <Text style={ [styles.restante12, styles.restanteTypo1] }>
        Restante: 12
      </Text>

      <Text style={ [styles.price5, styles.pricePosition] }>
        R$ 11,59
      </Text>

      <Text style={ [styles.restaurantName5, styles.restaurantTypo] }>
        Lata 473ml
      </Text>

      <Image
        style={ [styles.image54Icon, styles.iconPosition] }
        contentFit="cover"
        source={ require('../assets/image-54.png') }
      />

      <Image
        style={ styles.image56Icon }
        contentFit="cover"
        source={ require('../assets/image-56.png') }
      />

      <Image
        style={ styles.image55Icon }
        contentFit="cover"
        source={ require('../assets/image-55.png') }
      />

      <Image
        style={ styles.image3Icon }
        contentFit="cover"
        source={ require('../assets/image-3.png') }
      />
      
      <Image
        style={ styles.homeChild4 }
        contentFit="cover"
        source={ require('../assets/rectangle-177.png') }
      />

      <Image
        style={ styles.icon } 
        contentFit="cover" 
        source={ require('../assets/searchicon.png') } 
      />

      <Text style={ [styles.buscarPorProduto, styles.nossosProdutosFlexBox] }>
        Buscar por produto
      </Text>

    </View>

  );
};

export default Home;
