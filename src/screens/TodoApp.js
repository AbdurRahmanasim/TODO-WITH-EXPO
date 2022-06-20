import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../screens/TodoStyle.js";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //Create todo
  const addTodo = () => {
    // todo.push(inputValue);
    setTodo([...todo, inputValue]);
  };

  const deleteAll = () => {
    setTodo([])
  };

  const deleteOne = (id) => {
    const updatedTodo = todo.filter((val, ind) => {
        return ind !== id
      })
      setTodo(updatedTodo)
  };
   
  const editTodo = (id) => {
    // alert(id)
    const editTodo = prompt("Edit Todo");
    alert(editTodo)
    todo.splice(id, 1, editTodo)
    setTodo([...todo])
  }

  const renderItem = ({ index, item }) => {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>{item}</Text>
        <View style={styles.todoItemBtn}>
          <TouchableOpacity style={styles.btn} onPress={(e) => editTodo(index)}>
            <Text style={styles.btnText}> EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={(e) => deleteOne(index)}>
            <Text style={styles.btnText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <View style={styles.headingBox}>
      <Text style={styles.heading}>Todo APP</Text>
    </View>

    <View style={styles.inputBox}>
      <TextInput
        onChangeText={(e) => setInputValue(e)}
        style={styles.inputBar}
        placeholder="ENTER TODO"
      />

      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btn} onPress={addTodo}>
          <Text style={styles.btnText}> ADD TODO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={deleteAll}>
          <Text style={styles.btnText}>DELETE ALL</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.todoList}>
      <FlatList
        data={todo} 
        renderItem={renderItem} 
        keyExtractor={(item) => item}
      />
      {/* </ScrollView> */}
    </View>
  </View>
  );
};

export default Todo;
