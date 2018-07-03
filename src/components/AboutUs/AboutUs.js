import React, { Component } from 'react';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

import './AboutUs.css'

export default class AboutUs extends Component {
    render(){
        return (
        <html className="aboutUs-bg">
            <Header/>
            <div className="ui sizer vertical segment">
                <h3 className="ui center aligned header">
                    <div className="ui huge header">About</div>
                </h3>
                    <p>STSI LearningLab is a web application developed by two interns at STSI, Jimmy Flores and Emmett Dorlester, with the mentorship of STSI Employees Kevin Melendez and Ben Morris. The idea of LearningLab is to create a set of web applications to run on a Raspberry Pi, web applications consisting of a Weather App, a Traffic App, and more.</p>
                </div>
            <Footer />
        </html>
        );
    }
}
