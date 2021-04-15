import AsyncStorage from '@react-native-community/async-storage';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View,Image, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/style';

export default function Login({navigation})
{
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container,css.bgColor,css.viewMenu]}>
            <View>
                <Image source={require('../assets/img/logo.png')}/>
                
            </View>

            <View>
               <Text style={css.login__msg(display)}>Usuário ou senha inválido !!</Text> 
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setNome(text)}/>
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login__botton} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}