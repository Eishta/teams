import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR, CREATE_USER, DELETE_USER,  } from '../actions/actionTypes';

const initialState = {
    teams: [],
    users: {},
    isLoading: false,
    err: ''
}
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USER: return {
            ...state, isLoading: action.isLoading
        }
        case GET_USER_SUCCESS: return {
            ...state, isLoading: action.isLoading,
            users: action.users.map(user=> user.name)
        }
     case GET_USER_ERROR : return{
         ...state, err: action.err
     }
        case CREATE_USER: return {
            ...state,
            users: {
                ...state.users,
                [action.team]: !state.users[action.team].find(ele => ele.name === action.name)
                    ? [...state.users[action.team].concat(
                        {
                            name: action.name,
                            desc: action.desc
                        }
                    )
                    ] : [...state.users[action.team]]
            }
        };
        case DELETE_USER: return {
            ...state,
            users: {
                ...state.users,
                [action.team]: [...state.users[action.team].filter(user => {
                    debugger;
                    return user.name !== action.userName
                })]
            }
        }
        default: return state;
    }
}

export default userReducer;