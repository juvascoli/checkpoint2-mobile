import Us from "../Telas/Us";
import TabNavigator from "./BottonRoute";
import Dogs from "../Telas/Dogs";
import Description from "../Telas/Description";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

export default function StackNavigator(){
  return (
      <Stack.Navigator 
      screenOptions={{ headerTitle: () => (
        <Image
          source={require('../../assets/dog-icon.png')}
          style={{ width: 120, height: 40, resizeMode: 'contain' }}
        /> 
      )}}> 
        <Stack.Screen name="Home" component={TabNavigator}/>
        <Stack.Screen name="Us" component={Us} />
        <Stack.Screen name="Dogs" component={Dogs}/>
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
  )
}