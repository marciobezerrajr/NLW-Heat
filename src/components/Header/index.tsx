import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//importado o logo como maiusculo porque será utilizado como um componente
import LogoSvg from '../../assets/logo.svg'
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri='https://github.com/marciobezerrajr.png' />
      </View>
    </View>
  );
}