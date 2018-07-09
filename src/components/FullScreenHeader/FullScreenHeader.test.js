import React from 'react';
import ReactDOM from 'react-dom';
import FullScreenHeader from './FullScreenHeader.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FullScreenHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
});
