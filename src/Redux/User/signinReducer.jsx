import { USER_FAILURE, USER_SUCCESS, USER_REQUEST } from "./signinTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const signinReducer = (state = initialState, action) =>{
    switch(action.type){
        case USER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''               
            }
        case USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        default:
            return state

    }
}

export default signinReducer;