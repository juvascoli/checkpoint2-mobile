import Us from "../Telas/Us";
import Home from "../Telas/Home";
import TabNavigator from "./BottonRoute";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

export default function StackNavigator(){
  return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator}/>
        <Stack.Screen name="Us" component={Us}/>
      </Stack.Navigator>
  )
}