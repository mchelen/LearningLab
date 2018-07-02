import React, { Component } from 'react';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

import './AboutUs.css'

export default class AboutUs extends Component {
    render(){
        return (
        <html class="aboutUs-bg">
            <div className='aboutUs'>
                <Header/>
                <div class="ui sizer vertical segment">
                    <h3 class="ui center aligned header">
                        <div class="ui huge header">About</div>
                    </h3>
                        <p> STSI Learning Lab Web Application </p>
                    </div>
                <Footer />
            </div>
        </html>
        );
    }
}
