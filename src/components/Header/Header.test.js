import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';

it('handles item click', (done) => {
    const div = document.createElement('div');
    let entries = [
        {
            label: 'test0',
            index: 0
        },
        {
            label: 'test1',
            index: 1
        }
    ];

    let component = ReactDOM.render(<Header cardEntries={entries} onChange={jest.fn()} />, div);
    component.handleItemClick({}, {name: 'test'});
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        done();
    }, 3000);
});
