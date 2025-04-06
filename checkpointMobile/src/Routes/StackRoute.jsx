import Us from "../Telas/Us";
import TabNavigator from "./BottonRoute";
import Dogs from "../Telas/Dogs";
import Description from "../Telas/Description";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

export default function StackNavigator(){
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator}/>
        <Stack.Screen name="Us" component={Us}/>
        <Stack.Screen name="Dogs" component={Dogs}/>
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
  )
}