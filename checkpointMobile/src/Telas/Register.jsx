import React from 'react';
import {  Text, View, ImageBackground, StyleSheet } from 'react-native';

export default function Register() {
  return (
    <ImageBackground
    source={require('../../assets/bg.png')}
    style={styles.container}
    >
      <Text>Essa é a tela de registro</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});