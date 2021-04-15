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
            <Modal animationType="slide" transparent={false} visible={open2}>
                <SafeAreaView style={css.modal}>
                    <View style={css.modalHeader}>
                        <TouchableOpacity onPress={()=> setOpen2(false)}>
                            <Icon style={{marginLeft:5,marginRight:5}} name="arrow-left" size={35} color='#fff'/>
                        </TouchableOpacity>
                        <Text style={css.modalTitle}>Editar</Text>
                    </View>
                    <View>
                        <Text style={css.inputCad}>

                            
                            {data.task}
                        </Text>
                        <TextInput

                            keyboardType = 'numeric'
                            placeholder='QUANTIDADE:'
                            style={css.inputCad}
                            value={inputQnt2}
                            onChangeText={(item) => setInputQNT2(item)}
                        />
                        <TouchableOpacity style={css.inputSubmit} onPress={()=> edit(data,inputQnt2)}>
                            <Text>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
        
    )
}