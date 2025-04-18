import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function ErrorScreen({ navigation }) {
  return (

    <ImageBackground  source={require('../../assets/bg.png')} >
      <Image
        source={require('../../assets/404.avif')}
        style={styles.container}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}  >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </ImageBackground>
 
  );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
        backgroundColor: '#6A0DAD', 
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
      }
  });