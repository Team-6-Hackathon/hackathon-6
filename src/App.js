import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import Details from './Details'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        {/* <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} /> */}
        <Route exact path='/search' component={Search} />
        <Details/>
      </Switch>
    </div>
  );
}

export default App;
