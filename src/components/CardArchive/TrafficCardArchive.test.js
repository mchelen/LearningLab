import React from 'react';
import ReactDOM from 'react-dom';
import TrafficCardArchive from './TrafficCardArchive.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrafficCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
