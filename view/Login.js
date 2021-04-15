import AsyncStorage from '@react-native-community/async-storage';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View,Image, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/style';

export default function Login({navigation})
{
    const [display, setDisplay]=useState('none');
    const [nome, setNome]=useState('null');
    const [senha, setSenha]=useState('null');
    const [login, setLogin]=useState('false');

    useEffect(()=>{
        verifyLogin();
    },[])

    async function verifyLogin()
    {
        let response=await AsyncStorage.getItem('userData');
        let json=await JSON.parse(response);
        if (json !== null){
            setNome(json.nome);
            setSenha(json.senha);
            setLogin(true);
            await AsyncStorage.setItem('userData' , JSON.stringify(json));
            navigation.navigate('Menu');
        }
    }

    async function sendForm()
    {
        let response=await fetch('http://192.168.0.105:3000/login' , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha
            })
        });
        let json=await response.json();  
        if (json ==='erro'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },2000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userData' , JSON.stringify(json));
            navigation.navigate('Menu');
        }
    }

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