import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import Header from "./Header/Header.js";
import WeatherData from "./WeatherCard/WeatherData.js";
import TrafficCard from "./TrafficCard/TrafficCard.js";

import './App.css';


class App extends Component {
 // state = {users: []}
//
//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

  render() {
    return (
      <div className = "App">
        <Header />
        <div class="ui link cards">
          <WeatherData type="weather" units="imperial" zipcode="22209" />
          <TrafficCard />
        </div>
      </div>
    );
  }
}

export default App;
