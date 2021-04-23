import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile,Cadastro,Edicao,Itens} from '../index';
import { css } from '../../assets/css/style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu()
{
    const [nome,setNome]=useState(null);
    const Tab = createMaterialBottomTabNavigator();

    useEffect(()=>{
        async function getNome()
        {
            let response=await AsyncStorage.getItem("userData");
            let json=JSON.parse(response);
            setNome(json.nome);
        }
        getNome();
    },[]);

    return(
        <Tab.Navigator
        activeColor='#03e7ea'
        inactiveColor='#fff'
        barStyle={css.area__tab}
        >
            <Tab.Screen name="Inicio" 
            component={Profile} 
            options={{
                tabBarIcon:()=>(
                    <Icon name="users" size={20} color="#fff"/>
                )
            }}
            />
            <Tab.Screen name="Estoque" 
            component={Itens} 
            options={{
                tabBarIcon:()=>(
                    <Icon name="archive" size={20} color="#fff"/>
                )
            }}
            />
        </Tab.Navigator>
    );
}