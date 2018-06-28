import React from 'react';
import ReactDOM from 'react-dom';
import TrafficCard from './TrafficCard.js';

it('renders without crashing', (done) => {
    const div = document.createElement('div');
    ReactDOM.render(<TrafficCard zoom={12} lat={0} lng={0} location='test' description='test' />, div);
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        done();
    }, 3000);
});
