import AsyncStorage from '@react-native-community/async-storage';
import React, {useState , useEffect, useCallback} from 'react';
import {Text, View, TouchableOpacity, FlatList, Modal, SafeAreaView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LayoutMenu from '../../assets/components/LayoutMenu';
import { css } from '../../assets/css/style';
import TaskList from '../../assets/components/TaskList'

export default function Itens({navigation})
{
    const [task , setTask] = useState([]);
    const [open , setOpen] = useState(false);
    const [input , setInput] = useState('');
    const [inputQnt , setInputQNT] = useState('');

    //Carregando Lista ao iniciar

    useEffect(() => {
        async function loadTasks() {
             const taskStorage = await AsyncStorage.getItem('@itens');
 
             if(taskStorage){
                 setTask(JSON.parse(taskStorage));
             }
         }
         loadTasks();
     },[]);

    // Monitorando alteração da lista
    useEffect (() => {
        async function saveTask() {
            await AsyncStorage.setItem('@itens' , JSON.stringify(task))
        }
        saveTask();
    },[task]);
    
    function cadastrar() {
        if (input === '') return;

        const data ={
            key: Math.random(),
            task: input,
            quant: inputQnt,
        };
        setTask([...task , data]);
        setOpen(false)
        setInput('');
        setInputQNT('');
    }
     

    const handleDelete = useCallback((data) => {
        const find = task.filter(r => r.key !== data.key)
        setTask(find);
    })

    const edit = useCallback((data,inputQnt2) => {
        const newDAta = task.map( task => {
            return task.key === data.key ? {...task, quant: inputQnt2} : task
        });
        setTask(newDAta);
    })

    return(
        <View style={[css.container , css.containerTop]}>
        <LayoutMenu title='ITENS' navigation={navigation}/>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={task}
                keyExtractor={(item) => String(item.key)}
                renderItem={({item}) => <TaskList data={item} handleDelete={handleDelete} edit={edit} />}
            />
            

            <Modal animationType="slide" transparent={false} visible={open}>
                <SafeAreaView style={css.modal}>
                    <View style={css.modalHeader}>
                        <TouchableOpacity onPress={()=> setOpen(false)}>
                            <Icon style={{marginLeft:5,marginRight:5}} name="arrow-left" size={35} color='#fff'/>
                        </TouchableOpacity>
                        <Text style={css.modalTitle}>Novo Item</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Insira o nome do Item:"
                            style={css.inputCad}
                            value={input}
                            onChangeText={(item) => setInput(item)}
                        />
                        <TextInput
                            placeholder="Quantidade:"
                            keyboardType = 'numeric'
                            style={css.inputCad}
                            value={inputQnt}
                            onChangeText={(item) => setInputQNT(item)}
                        />
                        <TouchableOpacity style={css.inputSubmit} onPress={cadastrar}>
                            <Text>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>

          

            <TouchableOpacity style={css.buttonPlus} onPress={() => setOpen(true)}>
                <Icon name="plus" size={35} color="#fff"/>
            </TouchableOpacity>
        </View>
    )    
}