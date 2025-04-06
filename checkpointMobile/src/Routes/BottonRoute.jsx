import React from 'react';
import Register from "../Telas/Register";
import Home from '../Telas/Home';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";


const Tab = createBottomTabNavigator();

export default function TabNavigator({route}){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}
            initialRouteName={route?.params?.initialRouteName || "Home"}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarIcon: () => <Feather name='home' size={20} />,
            tabBarLabel: "Início"
        }}
      />

      <Tab.Screen name="Register" component={Register}
        options={{
            tabBarIcon: () => <Feather name= "user-plus" size={20} />,
            tabBarLabel: "Registro"
        }} />
    </Tab.Navigator>
    );
}

/*screenOptions={{
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
}}>
    <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home" size={size} color={color}/>                    
            ),
        }}
    />
    <Tab.Screen
    name="Register"
    commponent={Register}
    options={{
        tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color}/>
        )
    }}/>*/



    /* <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Register" component={Register} /> */