import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Search from './components/Search';

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
          <Route exact path='/search' component = {Search}/>
        </Switch>
      </div>
    );
  }
}

export default App;
