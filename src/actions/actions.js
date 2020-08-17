import { CREATE_TEAM, CREATE_USER, DELETE_USER, DELETE_TEAM } from './actionTypes';
import api from '../api/jsonplaceholder'

const createTeam=(name)=> {
    console.log(name)
    return {
        type: CREATE_TEAM,
        name
    }
}
const createUser=(team, name,desc)=> {
    return {
        type: CREATE_USER,
        team,name,desc
    }
}
const deleteUser=(team, userName)=> {
  return {
      type: DELETE_USER,
      team, userName
  }
}
const deleteTeam = (name)=> {
    return {
        type: DELETE_TEAM,
        name
    }
}

const getUserss = ()=> {

}


export {createTeam, createUser, deleteUser, deleteTeam};