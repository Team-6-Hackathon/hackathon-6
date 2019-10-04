import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <nav className = "navbar">
        <div className = "navbar-brand">
          <img src= "http://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg"/>
        </div>
        <div className = "navbar-menu">
          <div className = "navbar-start">
            <div className="field">
              <div className="control has-icons-left">
                <input id = "search-bar" className="input" type="text" placeholder="Paris" onChange = {(e) => this.props.setQuery(e.target.value)}/>
                <span className="icon is-small is-left">
                  <img src ="/magnifying_glass.svg" />
                </span>
              </div>
            </div>
          </div>
          <div className = "navbar-end">
            <ul className = "nav-links">
              <li><Link to='/'> Home </Link></li>
              <li><Link to='/signup'>Sign up</Link></li>
              <li><Link to='/login'>Log in</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      )
  }
}


export default Navbar