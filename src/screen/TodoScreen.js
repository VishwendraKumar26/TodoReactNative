import { FlatList, StyleSheet,Text,TextInput,TouchableOpacity,View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const TodoScreen = () =>{
    const [todo,setTodo]=useState("");
    const [todoList,setTodoList]=useState([]);

    const AddTodo = ()=>{
        if (todo){
            setTodoList([...todoList,{id : Date.now().toString(),title:todo}])
            setTodo(null);
        }

    }
    const DeleteTodo = (id) =>{
       const updateTodoList = todoList.filter((todo)=> todo.id !== id)
       setTodoList(updateTodoList);

      }
    const renderTodos=({item ,index})=>{
        return(
            <View style={{backgroundColor:"gray",borderRadius:6,paddingHorizontal:6,paddingVertical:10,
            marginBottom:10,flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:20,color:"#fff",flex:1}}>
                    {item.title}
                 </Text>
                <IconButton icon="trash-can" iconColor="#fff" onPress={()=>DeleteTodo(item.id)}/>
            </View>
        )
    }
    return(
        <View style={{marginHorizontal:15}}>

           
            <TextInput style={{borderWidth:2,
                 borderColor:"blue",
                 borderRadius:6,
                 paddingVertical:6,
                 paddingHorizontal:10,
                 }}
                 placeholder="Add your task .."
                 value={todo}
                 onChangeText={(userText) => setTodo(userText)}></TextInput>
                 <TouchableOpacity style={{backgroundColor:"#000",
                  borderRadius:6,
                  paddingVertical:10,
                  marginHorizontal:10,
                  marginBottom:30,
                  marginTop:10,
                  
                }}
                onPress={()=>AddTodo()}>
                    <Text style={{color:"#fff",textAlign:"center",fontSize:20,
                fontWeight:"bold"}}>Add</Text>
                 </TouchableOpacity>
                 {/*Render Todo List */}
                 <FlatList data={todoList} renderItem={renderTodos} />
        </View>
    )
}
export default TodoScreen

const styles = StyleSheet.create({})