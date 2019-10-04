import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        {/* <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} /> */}
        <Route exact path='/search' component={Search} />
      </Switch>
    </div>
  );
}

export default App;
