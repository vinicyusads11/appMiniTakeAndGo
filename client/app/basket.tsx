// TODO: estilizar e renomear este componente
import * as React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import styles from '@/styles/BasketStyle';

const Basket = () => {
  return (
    <View style={ styles.basket }>
      
      <Image
        style={ styles.basketItem }
        contentFit="cover"
        source={ require('../assets/vector-36.png') }
      />

      <Text style={ [styles.total, styles.totalClr] }>
        Total
      </Text>

      <Text style={ [styles.precoTotal, styles.totalClr] }>
        R$ 53,18
      </Text>

      <View style={ [styles.button, styles.buttonFlexBox] }>

        <Text style={ styles.button1 }>
          Pagar
        </Text>
      
      </View>
      <View style={ [styles.basketInner] } />
      
      <Text style={ [styles.adicionarMaisItens, styles.esvaziarCestaTypo] }>
        Adicionar mais itens
      </Text>

      <View style={ styles.rectangleView } />

      <Text style={ [styles.nomeFormaDePagamentoPIX, styles.buttonFlexBox] }>

        <Text style={ styles.formaDePagamentoContainer1 }>

          <Text style={ styles.formaDePagamento }>
            {`Forma de pagamento: `}
          </Text>

          <Text style={ styles.pix }>
            Pix
          </Text>

        </Text>

      </Text>

      <Image
        style={ styles.imagemPIX }
        contentFit="cover"
        source={ require('../assets/pixicon.png') }
      />

      <View style={ styles.botaoVermelhoEsvaziarCesta } />
      
      <Text style={ [styles.nomeEsvaziarCesta, styles.esvaziarCestaTypo] }>
        Esvaziar cesta
      </Text>
      
      <View style={ [styles.divCinzaEnergeticoMonster, styles.todasAsDivsCinzasProdutos] } />
      
      <View style={ [styles.divCinzaCupNoodles, styles.todasAsDivsCinzasProdutos] } />

      <Text style={ [styles.nomeEnergeticoMonster, styles.nomeDosProdutos] }>
        Energetico Monster
      </Text>

      <Text style={ [styles.precoEnergeticoMonster, styles.r697Typo] }>
        R$ 11,59
      </Text>

      <Text style={ [styles.descricaoEnergeticoMonster, styles.lata350mlTypo] }>
        Lata 350ml
      </Text>

      <View style={ [styles.fundoAlterarQuantidadeEnergeticoMonster, styles.basketChildLayout2]} />

      <View style={ [styles.fundoAlterarQuantidadeCupNoodles, styles.basketChildLayout2]} />

      <Image
        style={ [styles.sinalDeMaisEnergeticoMonster, styles.basketChildLayout1] }
        contentFit="cover"
        source={ require('../assets/plusicon.png') }
      />

      <Image
        style={ [styles.sinalDeMaisCupNoodles, styles.basketChildLayout1] }
        contentFit="cover"
        source={ require('../assets/plusicon.png') }
      />

      <Image
        style={ [styles.basketChild7, styles.basketChildLayout] }
        contentFit="cover"
        source={ require('../assets/lessicon.png') }
      />

      <Image
        style={ [styles.basketChild8, styles.basketChildLayout] }
        contentFit="cover"
        source={ require('../assets/lessicon.png') }
      />

      <Text style={ [styles.numero3EnergeticoMonster, styles.textTypo] }>
        3
      </Text>

      <Text style={ [styles.numero2CupNoodles, styles.textTypo] }>
        2
      </Text>

      <Image
        style={ [styles.fotoCupNoodles, styles.iconLayout] }
        contentFit="cover"
        source={ require('../assets/image-52.png') }
      />

      <Text style={ [styles.nomeCupNoodles, styles.nomeDosProdutos] }>
        Cup Noodles
      </Text>

      <Text style={ [styles.precoCupNoodles, styles.r697Typo] }>
        R$ 6,97
      </Text>

      <Text style={ [styles.descricaoCupNoodles, styles.lata350mlTypo] }>
        Galinha caipira 69g
      </Text>

      <Image
        style={ [styles.sinalDeMaisCupNoodles, styles.basketChildLayout1] }
        contentFit="cover"
        source={ require('../assets/plusicon.png') }
      />

      <Image
        style={ [styles.basketChild8, styles.basketChildLayout] }
        contentFit="cover"
        source={ require('../assets/lessicon.png') }
      />

      <Text style={ [styles.numero2CupNoodles, styles.textTypo] }>
        2
      </Text>

      <View style={ [styles.divCinzaChocolateSnickers, styles.todasAsDivsCinzasProdutos] } />

      <View style={ [styles.fundoAlterarQuantidadeSnickers, styles.basketChildLayout2] } />

      <Image
        style={ [styles.sinalDeMaisChocolateSnickers, styles.basketChildLayout1] }
        contentFit="cover"
        source={ require('../assets/plusicon.png') }
      />

      <Image
        style={ [styles.sinalDeMaisChocolateSnickers, styles.basketChildLayout] }
        contentFit="cover"
        source={ require('../assets/lessicon.png') }
      />

      <Image
        style={ styles.fotoChocolateSnickers }
        contentFit="cover"
        source={ require('../assets/image-58.png') }
      />

      <Text style={ [styles.nomeChocolateSnickers, styles.nomeDosProdutos] }>
        Chocolate SNICKERS
      </Text>

      <Text style={ styles.precoChocolateSnickers }>
        R$ 4,47
      </Text>

      <Text style={ [styles.descricaoChocolateSnickers, styles.lata350mlTypo] }>
        Original 45g
      </Text>

      <View style={ [styles.fundoAlterarQuantidadeSnickers, styles.basketChildLayout2] } />

      <Image
        style={ [styles.sinalDeMaisChocolateSnickers, styles.basketChildLayout1] }
        contentFit="cover"
        source={ require('../assets/plusicon.png') }
      />

      <Image
        style={ [styles.sinalDeMaisChocolateSnickers, styles.basketChildLayout] }
        contentFit="cover"
        source={ require('../assets/lessicon.png') }
      />

      <Text style={ [styles.numero1Snickers, styles.textTypo] }>
        1
      </Text>

      <Image
        style={ [styles.fotoEnergeticoMonster, styles.iconLayout] }
        contentFit="cover"
        source={ require('../assets/image-53.png') }
      />
      
    </View>
  );
};

export default Basket;
