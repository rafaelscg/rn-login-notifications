import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import { withNavigation } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#962d3e" />
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="sign-out" size={26} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleImage}>
          <Image source={require('~/assets/logo-05x.png')} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);
