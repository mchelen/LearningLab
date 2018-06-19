import React, { Component } from 'react';
import Header from "./Header/Header.js";
import WeatherData from "./WeatherCard/WeatherData.js";
import TrafficCard from "./TrafficCard/TrafficCard.js";
import CardContainer from "./CardContainer.js";

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
        <div className="ui centered cards">
          <CardContainer>
            <WeatherData type="weather" units="imperial" zipcode="22209" />
            <TrafficCard />
          </CardContainer>
      </div>
      </div>
    );
  }
}

export default App;
