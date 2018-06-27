import React from 'react';
import ReactDOM from 'react-dom';
import WeatherData from './WeatherData.js';

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
describe('zip code changes', () => {
    it('standard change', (done) => {
        const div = document.createElement('div');
        let component = ReactDOM.render(<WeatherData type='weather' zipcode='12345' />, div);
        component.handleZipChange({target: {value: '10001'}});
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div);
            done()
        }, 3000);
    });
    it('change to invalid value', (done) => {
        const div = document.createElement('div');
        let component = ReactDOM.render(<WeatherData type='weather' zipcode='12345' />, div);
        component.handleZipChange({target: {value: 'abc'}});
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div);
            done()
        }, 3000);
    });
    it('change after being unmounted', (done) => {
        const div = document.createElement('div');
        let component = ReactDOM.render(<WeatherData type='weather' zipcode='12345' />, div);
        ReactDOM.unmountComponentAtNode(div);
        component.handleZipChange({target: {value: 'abc'}});
        setTimeout(() => {
            done()
        }, 3000);
    });
});
