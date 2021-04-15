import React from 'react';
import {Text, View } from 'react-native';
import {css} from './assets/css/style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login} from './view';
import Menu from "./view/AreaRestrita/Menu";

export default function App() {

  const Stack = createStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"CEI: Controle de Estoque",
          headerStyle:{backgroundColor:"#011670"},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'}
          }}
        />
        <Stack.Screen name="Login" component={Login} 
          options={{headerShown:false}}
        />
       <Stack.Screen name="Menu" options={{headerShown:false}} component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


