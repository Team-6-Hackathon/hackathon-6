import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import 'bulma/css/bulma.css'
import Details from "./components/Details"



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  state ={
    query: ""
  }

  setQuery = (newQuery) =>{
    this.setState({
      query: newQuery
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar setQuery = {this.setQuery}/>
        

      <Switch>
        {/* <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route path='/details' component={Details} />
      </Switch>
    </div>
  );
}
}

export default App;
