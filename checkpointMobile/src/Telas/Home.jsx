import React from 'react';
import {  Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  

  return (
    <ImageBackground 
    source={require('../../assets/bg.png')}
    style={styles.container}>
      <Text style={styles.title}>Bem vindo ao 4 Patas!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Us")}>
        <Text style={styles.subtitle}>Conheça nossa equipe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Dogs") }>
        <Text style={styles.subtitle}>Veja todos os cachorros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Description")}>
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
    lineHeight: 26,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6A0DAD', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
});