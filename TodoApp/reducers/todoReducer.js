import { todoActionTypes } from "../actionTypeConstants/todoActionTypes"
import { authActionTypes } from "../actionTypeConstants/authActionTypes"
const initialState = {
    currentUser:'',
    authErrorMessage:'',
    users : {
        'Aakash':{
            username:'Aakash',
            password:'Test@1234',
            todos:{
                completed:{
                    
                        '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d':{
                            title:'Buy foods',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'',
                            assignedTo:'',
                            status:1,
                            priority:'HIGH',
                            todoId:'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
                        }
                    

                },
                uncompleted:{
                    
                        'b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed':{
                            title:'Buy Books',
                            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            assignedBy:'',
                            assignedTo:'',
                            status:0,
                            priority:"LOW",
                            todoId:'b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
                        }
                    
                },
                'archived':{

                }
            }
        }
    }
}
export const todoReducer = (state = initialState,action) =>{
    switch(action.type){
        
        case authActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser:action.userName
            }
        
        case authActionTypes.LOGIN_FAILURE:
            return{
                ...state,
                authErrorMessage:action.errorMessage
            }
        case todoActionTypes.ADD_TODO:
        case todoActionTypes.DELETE_TODO:
        case todoActionTypes.EDIT_TODO:
            // console.log(action.newState.users[action.newState.currentUser].todos)
            return {
                ...action.newState
            }
        default:
            return state
    }
}