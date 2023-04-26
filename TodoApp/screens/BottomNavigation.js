import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { NavigationContainer } from 'react-navigation'
import TodoContainer from '../components/Todo/TodoContainer'
const AllTodoContainer = ({navigation}) => {
    return <TodoContainer  navigation={navigation} type='all'/>
}
const CompletedTodoContainer = ({navigation}) => {
    return <TodoContainer type='completed' navigation={navigation}/>
}
const UncompletedTodoContainer = ({navigation}) => {
    return <TodoContainer type='uncompleted' navigation={navigation}/>
}
const BottomNavigator = createBottomTabNavigator({
    AllTodos:{
        screen:AllTodoContainer
    },
    CompletedTodos:{
        screen:CompletedTodoContainer
    },
    UncompletedTodos:{
        screen:UncompletedTodoContainer
    }
})

export default BottomNavigator