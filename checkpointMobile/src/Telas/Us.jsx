import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

const Equipe = ({ imageSource, name, rm }) => (

  <View style={styles.membroContainer}>
    <Image source={imageSource} style={styles.image} />
    <Text>{name}</Text>
    <Text>RM: {rm}</Text>
  </View>

);

export default function Us() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>nosso time</Text>
      <ScrollView contentContainerStyle={styles.membrosContainer}>
        <Equipe imageSource={require("../../assets/matheus.png")} name="Matheus Freitas" rm="552602" />
        <Equipe imageSource={require("../../assets/juliavasco.jpg")} name="Julia Vasconcelos" rm="558785" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  membrosContainer: {
    alignItems: "center",
    padding: 20
  },
  membroContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  }
});
