import {createStore, applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer';
import logger from 'redux-logger';
import {reducer} from '../reducers/userReducer'

export const store = createStore(userReducer, applyMiddleware(logger));
// import {createStore, applyMiddleware} from 'redux';
// import {rootReducer} from '../reducers/quizReducer';
// import thunkMiddleware from 'redux-thunk';
// import logger  from 'redux-logger';

// export const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));