import React, { Component } from 'react';
import Header from "./Header";
import WeatherData from "./WeatherData.js";


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
        <WeatherData type="weather" units="imperial" location={{type: 'zip', loc: '22209'}} />
      </div>
    );
  }
}

export default App;
