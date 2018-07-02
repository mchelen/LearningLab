import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import WeatherData from './WeatherCard/WeatherData.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';


export default class WeatherCardArchive extends Component {
    render(){
        return (
            <div className='WeatherCardArchive'>
                <Header/>
                <div className='ui centered cards'>
                    <div className='ui relaxed grid'>
                        <div className='row' />
                        <WeatherData
                            type='weather'
                            zipcode='22209'
                            key='Weather Card'
                            menuLabel='Weather Card'
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
