import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins ExtraBold.ttf'),
    'Roboto': require('../../assets/fonts/Roboto Condensed Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground 
      source={require('../../assets/bg.png')}
      style={styles.container}
    >
      <View style={styles.welcome}>
        <Text style={styles.title}>Bem vindo ao</Text>
        <Text style={styles.logoTitle}> 4patas!</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Us")}>
        <Text style={styles.subtitle}>Quem somos?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dogs")}>
        <Text style={styles.subtitle}>Adote um cachorro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Description")}>
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
  welcome: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Roboto'
  },
  logoTitle: {
    color: '#6A0DAD',
    fontSize: 24
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 26,
    color: '#fff',
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
