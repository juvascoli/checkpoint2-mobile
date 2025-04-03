
import Us from "./src/Telas/Us";
import Home from "./src/Telas/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Us" component={Us}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


