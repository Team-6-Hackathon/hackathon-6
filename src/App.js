import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import 'bulma/css/bulma.css'
import Details from "./components/Details"
<<<<<<< HEAD
import Map from './components/Map'
=======
import SingleShowing from './components/SingleShowing.jsx'

>>>>>>> f946a59c159951d5aa0483d20d6d84cdc2746a2b


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
<<<<<<< HEAD
        <Navbar setQuery = {this.setQuery}/>
        <Map/>
=======
      <Navbar setQuery = {this.setQuery}/>
      <SingleShowing 
        image={'/image3.png'} 
        name={'Two Bedroom Loft in the Heart of Paris'}
        size={'2 Guests 2 bed 2.5 Bath'}
        rating={'4.6(35)'}
        price={'$76/night'}
        />
      <SingleShowing 
        image={'/image 2.png'} 
        name={'Studio Apartment near the Effiel Tower'}
        size={'2 Guests Studio 1 bed 1 Bath'}
        rating={'4.7(72)'}
        price={'$87/night'}
      />
>>>>>>> f946a59c159951d5aa0483d20d6d84cdc2746a2b

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
