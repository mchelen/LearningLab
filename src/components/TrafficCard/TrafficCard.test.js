import React from 'react';
import ReactDOM from 'react-dom';
import TrafficCard from "./TrafficCard.js";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrafficCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
