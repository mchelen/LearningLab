import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from './FullScreen.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FullScreen />, div);
    ReactDOM.unmountComponentAtNode(div);
});
