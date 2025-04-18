
import React, { useState } from 'react';
import {  SafeAreaView , Text, TextInput, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';

export default function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ImageBackground
    source={require('../../assets/bg.png')}
    style={styles.container}
    >
      <SafeAreaView style={styles.container}>
       <Text style={styles.title}>Faça seu login</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />
         <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082',
    textAlign: 'center',
    marginBottom: 8
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444'
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    fontSize: 16
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
});