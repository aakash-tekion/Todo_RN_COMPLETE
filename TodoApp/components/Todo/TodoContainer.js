import React, { useEffect } from 'react'
import { View,Text} from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import TodoPriorityTab from './TodoPriorityTab.js'
import Button from '../../atoms/Button/Button.js'
import todoStyles from '../../styles/Todo.css.js'
import globalStyles from '../../styles/index.css.js'
export default function TodoContainer({ navigation,type }) {
  const username = useSelector(state=>state.appData.currentUser)
  const todos = useSelector(state=>state.appData.users[username].todos)
  let tasks = []
  if(type === 'all'){
    tasks = [...Object.values(todos.uncompleted),...Object.values(todos.completed)]
  }
  else if(type === 'completed'){
    tasks = [...Object.values(todos.completed)]
  }
  else if(type === 'uncompleted'){
    tasks = [...Object.values(todos.uncompleted)]
  }
  addButtonHandler = () => {
    navigation.navigate('Form')
  }
  // console.log(tasks)
  return(
    <View style={todoStyles.todoContainer}>
      <TodoPriorityTab/>
      <View style={[globalStyles.width100,todoStyles.addButtonContainer,globalStyles.justifyContentCenter,globalStyles.alignContentCenter]}>
        <Button text='Add Todo' customStyle={{height:'80%'}} handler={addButtonHandler}/>
      </View>
     
    </View>
      
  )
}
