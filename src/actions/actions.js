import { CREATE_TEAM, CREATE_USER, DELETE_USER } from './actionTypes';

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

export {createTeam, createUser, deleteUser};