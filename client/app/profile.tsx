// TODO: estilizar e renomear este componente
import * as React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/ProfileStyle';

const Profile = () => {
  return (
    <View style={styles.profile1}>
      <View style={styles.profile1Child} />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require('../assets/mask-group.png')}
      />
      <Image
        style={styles.profile1Item}
        contentFit="cover"
        source={require('../assets/group-18153.png')}
      />
      <View style={styles.johnParent}>
        <Text style={[styles.john, styles.johnLayout]}>John</Text>

        <Text style={[styles.textoEditeInformacoesDeSeuPerfilAbaixo, styles.editeInformaesDeTypo]}>
          Edite informações de seu perfil abaixo
        </Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.nomeParent}>
          <Text style={[styles.nome, styles.nomeFlexBox]}>Nome</Text>
          <View style={styles.groupChild} />
          <Text style={[styles.johnDoe, styles.text1Typo]}>John Doe</Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>$ 1679.30</Text>
        <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Text style={[styles.johndoeexemplocom, styles.text1Typo]}>johndoe@exemplo.com</Text>
        <Text style={[styles.telefone, styles.eMailTypo]}>Telefone</Text>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text style={[styles.text1, styles.text1Typo]}>+55 (48) 99999-9999</Text>
      </View>
      <View style={[styles.button, styles.buttonBg]}>
        <Text style={styles.button1}>Salvar alterações</Text>
      </View>
      <Image
        style={[styles.profile1Inner, styles.johnLayout]}
        contentFit="cover"
        source={require('../assets/vector-36.png')}
      />
      <Text style={[styles.desejaExcluirSuaContainer, styles.editeInformaesDeTypo]}>
        <Text style={styles.desejaExcluirSuaConta}>
          <Text style={styles.desejaExcluirSua}>Deseja excluir sua conta?</Text>
          <Text style={styles.nomeTypo}>{` `}</Text>
        </Text>
        <Text style={[styles.cliqueAqui, styles.textTypo]}>Clique aqui!</Text>
      </Text>
      <View style={[styles.rectangleView, styles.buttonBg]} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require('../assets/group-18073.png')}
      />
      <Text style={[styles.sair, styles.nomeFlexBox]}>Sair</Text>
    </View>
  );
};

export default Profile;
