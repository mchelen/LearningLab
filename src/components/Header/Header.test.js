import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';

it('handles item click', (done) => {
    const div = document.createElement('div');
    let component = ReactDOM.render(<Header />, div);
    component.handleItemClick({}, {name: 'test'});
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        done();
    }, 3000);
});
