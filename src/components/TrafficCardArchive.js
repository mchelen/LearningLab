import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import TrafficCard from './TrafficCard/TrafficCard.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';


export default class TrafficCardArchive extends Component {
    render(){
        return (
            <div className='TrafficCardArchive'>
                <Header/>
                <div className='ui centered cards'>
                    <div className='ui relaxed grid'>
                        <div className='row' />
                        <TrafficCard
                            zoom={12}
                            lat={38.9}
                            lng={-77.08}
                            location='Arlington, VA'
                            description='Current traffic in STSI area'
                            key='Traffic Card'
                            menuLabel='Traffic Card'
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
