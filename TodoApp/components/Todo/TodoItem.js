import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native'
import todoStyles from '../../styles/Todo.css'

export default function TodoItem({ data,navigation}) {

  const editTodoHandler = (todoObj) => {
    
  }
  return (
    <TouchableHighlight underlayColor={'#fff'} onPress={()=>{editTodoHandler(data)}} style={[todoStyles.todoItem,todoStyles.itemShadow]}>
      <Text numberOfLines={2} style={data.status?todoStyles.todoText:todoStyles.strikedText} >
        {data.title}
      </Text>
    </TouchableHighlight> 
  )
}
