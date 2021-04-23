import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { css } from '../../assets/css/style';


export default function LayoutMenu(props)
{
    async function logout()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Home')
    }
return(
<View style={css.area__menu}>
    <TouchableOpacity style={css.button__home} onPress={()=>props.navigation.navigate('Home')}>
        <Icon name="home" size={20} color='#fff'/>
    </TouchableOpacity>

    <Text style={css.area__title}>{props.title}</Text>

</View>
);
}