import React from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Essa é a home! (por enquanto)</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate("Us")}>
        <Text>tela nossa equipe</Text>
      </TouchableOpacity>
    </View>
  );
}
