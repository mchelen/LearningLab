import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import WeatherData from './WeatherCard/WeatherData.js';
import TrafficCard from './TrafficCard/TrafficCard.js';
import CardContainer from './CardContainer/CardContainer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

export default class AboutUs extends Component {
    render(){
        return (
            <div className='aboutUs'>
                <Header/>
                <Footer />
            </div>
        );
    }
}
