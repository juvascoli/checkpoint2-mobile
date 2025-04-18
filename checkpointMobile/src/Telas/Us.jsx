import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Linking, StyleSheet, ImageBackground } from "react-native";

const Equipe = ({ imageSource, name, rm, githubUrl }) => (
  <View style={styles.membroContainer}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.descricao}>{name}</Text>
    <Text style={styles.descricao}>RM: {rm}</Text>
    
    <TouchableOpacity onPress={() => Linking.openURL(githubUrl)} style={styles.button}>
      <Image source={require("../../assets/gitlogo.png")} style={styles.githubImage} />
    </TouchableOpacity>
  </View>
);

export default function Us() {
  return (
    <ImageBackground 
    source={require('../../assets/bg.png')}
    style={styles.container}>
      <Text style={styles.title}>Quem somos?</Text>

      <ScrollView contentContainerStyle={styles.membrosContainer}>
        <Equipe 
          imageSource={require("../../assets/matheus.png")} 
          name="Matheus Freitas" 
          rm="552602" 
          githubUrl="https://github.com/MatheusFreitasSilva"
        />
        <Equipe 
          imageSource={require("../../assets/juliavasco.jpg")} 
          name="Julia Vasconcelos" 
          rm="558785" 
          githubUrl="https://github.com/juvascoli"
        />

      </ScrollView>

      <Text 
      style={styles.paragraph}>
        A gente acredita que todo animal de rua merece um lar. 
        Por isso, trabalhamos para conectar os cães que estão em abrigos 
        com pessoas que estejam procurando por um pet pra chamar de seu.
        </Text>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  descricao:{
    fontWeight: "bold",
    color: '#333'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50
  },
  membrosContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  membroContainer: {
    alignItems: "center",
    padding: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  githubImage: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#DDA0DD',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 19,
    alignSelf: 'center',
    marginTop: 20
  },
  paragraph:{
    backgroundColor: '#DDA0DD',
    padding: 15,
    borderRadius: 20,
    marginBottom: 70,
    marginHorizontal: 30,
    color: '#333'
  }
});
