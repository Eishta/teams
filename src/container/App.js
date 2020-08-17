// 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Users from '../components/Users'
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import { getUserss } from '../actions/userActions';

const App =({getUserss}) =>{
  
 useEffect(()=> {
  getUserss();
 },[]);
    return (
    <React.Fragment> 
      <Users />
      {/* <Router>
      <NavBar/>
              <Switch> 
                <Route path='/users' exact component={Users} />
                <Route path='/users/:name' component={Users} />
                <Redirect to="/" />
              </Switch>
      </Router> */}
     </React.Fragment>)
  
}
const mapDispatchToProps =(dispatch)=> {
  return {
    getUserss: ()=> dispatch(getUserss())
  }
}
export default connect(null, mapDispatchToProps)(App);
