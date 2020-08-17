// 
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Users from '../components/Users'
import NavBar from '../components/NavBar'

const App =() =>{
 
    return (
    <React.Fragment> 
      <Router>
      <NavBar/>
              <Switch> 
                <Route path='/users' exact component={Users} />
                <Route path='/users/:name' component={Users} />
                <Redirect to="/" />
              </Switch>
      </Router>
     </React.Fragment>)
  
}

export default App;
