import React, { Component } from 'react';
import Header from './Header/Header.js';
import home from './home.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer/Footer.js';
import WeatherData from './WeatherCard/WeatherData.js';
import WeatherCard from './WeatherCard/WeatherCard.js';
import TrafficCard from './TrafficCard/TrafficCard.js';
import TrafficCardArchive from './TrafficCardArchive.js';
import WeatherCardArchive from './WeatherCardArchive.js';
import CardContainer from './CardContainer/CardContainer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
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
