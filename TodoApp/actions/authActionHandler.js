import { authActionTypes } from "../actionTypeConstants/authActionTypes"
export const loginHandler = (user) => {
    
    return (dispatch,getState)=>{
        const state = getState()['appData']['users']
        // console.log(state)
        if(user.username in state){
          
            if(user.password === state[user.username]['password']){
                
                return dispatch({
                    type:authActionTypes.LOGIN_SUCCESS,
                    userName:user.username
                })
            }
            else{
               
                return dispatch({
                    type:authActionTypes.LOGIN_FAILURE,
                    authErrorMessage:'Invalid Password'
                })

            }
           
        }
        else{
           
            return dispatch({
                type:authActionTypes.LOGIN_FAILURE,
                authErrorMessage:'User not found'
            })

        }
    }
}