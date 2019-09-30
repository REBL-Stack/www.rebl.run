import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Blockstack, initBlockstack } from 'react-blockstack'
import { AppConfig } from 'blockstack';
import App from './App.js'
import Auth from './Auth.js'

// Require Sass file so webpack can build it
import 'bootstrap/dist/css/bootstrap.css';
import'./styles/style.css';

const appConfig = new AppConfig()
initBlockstack(appConfig)

ReactDOM.render(<App/>, document.getElementById('App'));
ReactDOM.render(<Auth/>, document.getElementById('Auth'));
