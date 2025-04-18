import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Linking, StyleSheet, ImageBackground } from "react-native";

const Equipe = ({ imageSource, name, rm, githubUrl }) => (
  <View style={styles.membroContainer}>
    <Image source={imageSource} style={styles.image} />
    <Text>{name}</Text>
    <Text>RM: {rm}</Text>
    
    <TouchableOpacity onPress={() => Linking.openURL(githubUrl)} style={styles.btn}>
      <Text>Git:</Text>
      <Image source={require("../../assets/gitlogo.png")} style={styles.githubImage} />
    </TouchableOpacity>
  </View>
);

export default function Us() {
  return (
    <ImageBackground 
    source={require('../../assets/bg.png')}
    style={styles.container}>
      <Text style={styles.title}>Nosso Time</Text>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white'
  },
  membrosContainer: {
    alignItems: "center",
    padding: 30,
    borderRadius: 15,
    marginBottom: 20,
    width: 400
  },
  membroContainer: {
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 40
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
  btn: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: 100,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000"
  }
});
