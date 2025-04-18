import React from 'react';
import {  Text, View, ImageBackground, StyleSheet } from 'react-native';

export default function Description(){
    return(
        <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.container}
        >
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });