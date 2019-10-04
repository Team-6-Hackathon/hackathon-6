import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import "bulma/css/bulma.css"
// const mongoose = require('mongoose');

// mongoose
//     .connect('mongodb://localhost/hackathon-airbnb', { useNewUrlParser: true })
//     .then(x => {
//         console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     })
//     .catch(err => {
//         console.error('Error connecting to mongo', err)
//     });

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
