import React from 'react';
import ReactDOM from 'react-dom';
import WeatherData from "./WeatherData.js";

it('renders without crashing', (done) => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherData type='weather' zipcode='12345' />, div);
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        done();
    }, 3000);
});

it('handles invalid zipcode without crashing', (done) => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherData type='weather' zipcode='00000' />, div);
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        done();
    }, 3000);
});
