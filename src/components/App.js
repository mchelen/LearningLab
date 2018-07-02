import React, { Component } from 'react';
import home from './home.js';
import AboutUs from './AboutUs/AboutUs.js';
import TrafficCardArchive from './CardArchive/TrafficCardArchive.js';
import WeatherCardArchive from './CardArchive/WeatherCardArchive.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

export default class App extends Component {
    render(){
        return (
            <Router>
            <div className='App'>
                <Route path="/" exact component={home}/>
                <Route path="/aboutUs" component={AboutUs}/>
                <Route path="/WeatherCard" component={WeatherCardArchive}/>
                <Route path="/TrafficCard" component={TrafficCardArchive}/>
            </div>
            </Router>
        );
    }
}
