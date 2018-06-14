import React, { Component } from 'react';
import Header from "./Header";
import WeatherCard from "./WeatherCard";


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
        <WeatherCard />
      </div>
    );
  }
}

export default App;
