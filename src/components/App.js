import React, { Component } from 'react';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import WeatherData from "./WeatherCard/WeatherData.js";
import TrafficCard from "./TrafficCard/TrafficCard.js";
import CardContainer from "./CardContainer/CardContainer.js";

import './App.css';


export default class App extends Component {
 // state = {users: []}
//
//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

    render() {
        return (

            <div className="App">
                <Header />
                <div className="ui centered cards">
                    <div className="ui relaxed grid">
                        <div className="row" />
                        <CardContainer>
                            <WeatherData type="weather" units="imperial" zipcode="22209" />
                            <TrafficCard />
                        </CardContainer>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
