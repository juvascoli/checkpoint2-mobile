import React from 'react';
import {  Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground 
    source={require('../../assets/bg.png')}
    style={styles.container}>
      <Text style={styles.title}>Bem vindo ao 4 Patas!</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate("Us")}>
        <Text>Conheça nossa equipe</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Dogs") }>
        <Text>Veja todos os cachorros</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Description")}>
        <Text>Por que adotar?</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  }
});