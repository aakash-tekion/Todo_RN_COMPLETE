import React, { Component, useState,useEffect } from 'react'
import {View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import Button from '../../atoms/Button/Button.js'
import Input from '../../atoms/Input/Input.js'
import globalStyles from '../../styles/index.css.js'
import formStyles from '../../styles/Form.css.js'
import { loginHandler } from '../../actions/authActionHandler.js'
export default function Login({navigation}) {
    
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.appData.currentUser)
    const formHandler = () => {
        dispatch(loginHandler({
            username,password
        }))

    }
    // console.log(currentUser)
    useEffect(()=>{
        console.log(currentUser)
        if(currentUser){
            navigation.navigate('Home')
        }
    },[currentUser])
    
    return (
        <View style={[globalStyles.container,globalStyles.card]} >
            <View style={formStyles.form}>
                <Input placeholder='Username'  setHandler={setUserName}/>
                <Input placeholder='Password' setHandler={setPassword}/>
                <Button text='Login' handler = {formHandler} />
            </View>
        </View>

    )
}


