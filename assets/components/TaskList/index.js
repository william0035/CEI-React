import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, SafeAreaView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { css } from '../../css/style';

export default function TaskList({data , handleDelete, edit }) {
    
    
    const [open2 , setOpen2] = useState(false);
    const [inputQnt2 , setInputQNT2] = useState('');
    

    return(
        <View style={css.containerList}>
            <Text style={css.task}>ITEM: {data.task}   QNT:{data.quant}</Text>
            
            <View style={css.iconList}>
            <TouchableOpacity onPress={()=>setOpen2(true)}>
                <Icon name="pencil" size={30} color="#fff"/>
            </TouchableOpacity>
            <Text>    </Text>
            <TouchableOpacity onPress={()=>handleDelete(data)}>
                <Icon name="trash" size={30} color="#fff"/>
            </TouchableOpacity>
            </View>    
              
         

        </View>
        
    )
}