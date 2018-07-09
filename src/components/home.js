import React, { Component } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import WeatherData from './WeatherCard/WeatherData.js';
import TrafficCard from './TrafficCard/TrafficCard.js';
import CardContainer from './CardContainer/CardContainer.js';

import './App.css';

export default class home extends Component {
    render(){
        let cards = [
            <WeatherData
                type='weather'
                zipcode='22209'
                key='Weather Card'
                menuLabel='Weather Card'
            />,
            <TrafficCard
                zoom={12}
                lat={38.9}
                lng={-77.08}
                location='Arlington, VA'
                description='Current traffic in STSI area'
                key='Traffic Card'
                menuLabel='Traffic Card'
            />
        ];
        let cardToDropdown = (card, index) => ({
            label: card.props.menuLabel,
            index: index
        });

        return (
            <div className='home'>
                <Header
                    cardEntries={cards.map(cardToDropdown)}
                />
                <div className='ui centered cards'>
                    <div className='ui relaxed grid'>
                        <div className='row' />
                        <CardContainer
                            cardDuration={10000}
                            fadeTime={1000}
                        >{cards}</CardContainer>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
