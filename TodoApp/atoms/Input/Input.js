import React from 'react'
import { TextInput } from 'react-native'
import inputStyles from './Input.css.js'
export default function Input({placeholder,setHandler,setMultiLine,value}) {
  return (
    <TextInput 
    style={inputStyles.input} 
    multiline={setMultiLine} 
    onChangeText={text => setHandler(text)} 
    value={value}
    placeholder={placeholder}
    />
  )
}
