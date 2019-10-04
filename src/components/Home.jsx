import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='search'>
                    <img src='/Airbnb_logo.jpg' alt='logo'/>
                    <form onSubmit=''>
                        <input type='text' name='search' placeholder='Search'/>
                        <input type='text' name='date' placeholder='Date'/>
                        <Link className='link-button' to='/search'> Submit </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;