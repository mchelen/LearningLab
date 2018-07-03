import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCardArchive from './WeatherCardArchive.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherData />, div);
    ReactDOM.unmountComponentAtNode(div);
});
