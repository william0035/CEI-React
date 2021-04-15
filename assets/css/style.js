import {StyleSheet} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    viewMenu:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTop:{
      justifyContent:'flex-start',
    },
    containerHome: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerList:{
      flex:1,
      margin:10,
      backgroundColor:"#011670",
      padding: 7,
      borderRadius: 5,
      paddingLeft: 20,
      paddingRight: 20,
    },
    imgHome:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconList:{
      
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttonDefault: {
      margin: 15,
      alignItems: "center",
      backgroundColor: "#011670",
      borderRadius:10,
      padding: 10,
    },
    buttonDefaultText:{
      color: '#fff',
      fontSize: 25,
    },
    bgColor:{
      backgroundColor: "#011670",
    },
    login__msg:(text='none')=>({
      fontWeight:'bold',
      fontSize:22,
      color:"red",
      marginTop:10,
      marginBottom:15,
      display: text,
    }),
    login__form:{
      width:"80%",
    },
    login__input:{
      backgroundColor:"#fff",
      fontSize:19,
      padding:7,
      marginTop: 15,
      marginBottom:15,
    },
    login__botton: {
      margin: 15,
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius:10,
      padding: 10,
    },
    login__buttonText:{
      color: '#011670',
      fontSize: 25,
    },
    area__tab:{
      backgroundColor: '#011670',
      fontSize: 20,
      fontWeight: 'bold',
      color:'#333'
    },
    area__menu:{
      flexDirection: 'row',
      paddingTop: 40,
      paddingBottom: 10,
      width: '100%',
      backgroundColor: '#011670',
      alignItems:'center',
      justifyContent:'center',
    },
    button__home:{
      textAlign:'left',
    },
    area__title:{
      width:'80%',
      fontWeight:'bold',
      fontSize:20,
      color:'#fff',
      textAlign:'center',
    },
    button__logout:{
      textAlign:'right',
    },
    task:{
      color: '#fff',
      fontSize: 20,
      paddingLeft: 10,
      paddingRight: 20,
    },
    modal:{
      flex: 1,
      backgroundColor: '#011670',
    },
    modalHeader:{
      marginLeft:10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    modalTitle:{
      marginLeft:15,
      fontSize: 23,
      color: '#fff',
    },
    inputCad:{
      fontSize: 15,
      margin:10,
      marginTop: 30,
      backgroundColor: '#DCDCDC',
      padding: 9,
      borderRadius: 5,
    },
    buttonPlus:{
      position: 'relative',
      width: 55,
      height: 55,
      backgroundColor: '#011670',
      alignItems: 'center',
      justifyContent :'center',
      borderRadius: 30,
      left: 25,
      bottom: 8,
      zIndex: 9,
    },
    inputSubmit:{
      backgroundColor: "#fff",
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight:10,
      borderRadius: 5,
      height:40,
    },
  });
export {css};