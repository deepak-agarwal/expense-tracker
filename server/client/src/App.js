import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Login from './components/login/login';
import Register from './components/register/register'
import EmployeeDashboard from './components/employee/dashbard'


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/account' component={EmployeeDashboard}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;