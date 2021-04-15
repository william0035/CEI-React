import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LayoutMenu from '../../assets/components/LayoutMenu';
import { css } from '../../assets/css/style';

export default function Profile({navigation})
{

    return(
        <View style={[css.container , css.containerTop , css.imgHome] }>
            <LayoutMenu title='PERFIL' navigation={navigation}/>

        <Image source={require('../../assets/img/tela.png')} />



        </View>
    );
}