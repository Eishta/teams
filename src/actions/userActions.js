import api from '../api/jsonplaceholder';
import {GET_USER, GET_USER_ERROR, GET_USER_SUCCESS} from './actionTypes'

const getUser=()=> {
    return {
  type: GET_USER,
  isLoading: true
    }
}
const getUserSuccess=(res)=> {
    return {
        type: GET_USER_SUCCESS,
        users: res
    }
}
const getUserError=(err)=> {
    return {
        type: GET_USER_ERROR,
        err
    }
}
const getUserss = (dispatch)=> {
    dispatch(getUser);
    api.getUsers().then(res=> dispatch(getUserSuccess(res)))
    .catch(err=> dispatch(getUserError(err)))
}

export  {getUserss};