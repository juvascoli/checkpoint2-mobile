import React from 'react';
import {  Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground 
    source={require('../../assets/bg.png')}
    style={styles.container}>
      <Text style={styles.title}>Bem vindo ao 4 Patas!</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate("Us")}>
        <Text style={styles.subtitle}>Conheça nossa equipe</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dogs") }>
        <Text style={styles.subtitle}>Veja todos os cachorros</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Description")}>
        <Text style={styles.subtitle}>Por que adotar?</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle:{
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    lineHeight: 26,
  }
});