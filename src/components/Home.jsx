import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='search'>
                    <img src=''/>
                    <form>
                        <input type='text' name='search' placeholder='Search'/>
                        <input type='text' name='date' placeholder='Date'/>
                        <input type='submit' value='Submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;