import { CREATE_TEAM, CREATE_USER, DELETE_USER } from '../actions/actionTypes';

const initialState = {
    teams: [],
    users: {}
}
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TEAM: {
            return {
                ...state,
                teams: !state.teams.find(ele => ele.name === action.name)
                    ? [...state.teams, { name: action.name }]
                    : [...state.teams],
                users: !state.users[action.name] ?{
                    ...state.users, [action.name]: [] } : {...state.users}
             
            }
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