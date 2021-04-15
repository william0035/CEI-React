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
            

           
          

            <TouchableOpacity style={css.buttonPlus} onPress={() => setOpen(true)}>
                <Icon name="plus" size={35} color="#fff"/>
            </TouchableOpacity>
        </View>
    )    
}