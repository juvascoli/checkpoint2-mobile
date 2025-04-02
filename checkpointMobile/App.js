import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Us from "./src/Telas/Us";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Us">
        <Stack.Screen name="Us" component={Us} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


