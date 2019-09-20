import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Login from './components/login/login';
import Register from './components/register/register'


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;