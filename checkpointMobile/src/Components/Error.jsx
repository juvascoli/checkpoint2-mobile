import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function ErrorScreen({ navigation }) {
  return (

    <ImageBackground  source={require('../../assets/bg.png')}
    >
      <Image
        source={require('../../assets/404.avif')}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}  >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </ImageBackground>
 
  );
}