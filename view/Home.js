import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {css} from '../assets/css/style';

export default function Home({navigation})
{
    return(
        <View style={css.containerHome}>
            <TouchableOpacity style={css.buttonDefault} onPress={() => navigation.navigate('Menu')} >
                <Text style={css.buttonDefaultText} >ENTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}