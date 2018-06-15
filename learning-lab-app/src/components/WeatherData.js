import React, {Component} from 'react';
import WeatherCard from './WeatherCard.js';

var request = require('request');

export default class WeatherData extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null,
            zipcode: this.props.zipcode
        };
        this.handleZipChange = this.handleZipChange.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.refreshData();
    }

    handleZipChange(event){
        this.setState({zipcode: event.target.value}, () => {
            if(this.state.zipcode.match(/^[0-9]{5}$/)){ //make sure it's a zip code
                console.log(this.state.zipcode);
                this.refreshData();
            }
        });
    }

    refreshData(){
        getWeather((err, res, body) => this.setState({
            weather: body
        }), this.props.type, this.state.zipcode, this.props.units);
    }

    render(){
        return (
            <WeatherCard data={this.state.weather} zipcode={this.state.zipcode} 
            handleZipChange={this.handleZipChange} />
        );
    }
}

function getWeather(callback, type, zipcode, units){
    const apikey = '9dd566342853579b7ca76a7f2125741e';
    var qstring = type+'?zip='+zipcode+'&units='+units+'&APPID='+apikey;
    var options = {
        url: 'http://api.openweathermap.org/data/2.5/'+qstring,
        json: true
    };

    request(options, callback);
}
