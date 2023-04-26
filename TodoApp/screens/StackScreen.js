import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackContainer, createStackNavigator } from 'react-navigation-stack'
import Login from '../components/Auth/Login'
import TodoContainer from '../components/Todo/TodoContainer'
import Form from '../components/Form/TodoForm.js'
import DrawerNavigator from './DrawerNavigator.js'
import TodoForm from '../components/Form/TodoForm.js'
const appStackNavigator = createStackNavigator({
    Login:{
        screen:Login
    },
    Home:{
        screen:DrawerNavigator
    },
    Form:{
        screen:TodoForm
    }
})
const AppContainer = createAppContainer(appStackNavigator)
export default AppContainer