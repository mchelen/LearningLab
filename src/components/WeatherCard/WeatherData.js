import React, {Component} from 'react';
import WeatherCard from './WeatherCard.js';

var request = require('request');

export default class WeatherData extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null,
            zipcode: this.props.zipcode,
            city: null
        };
        this.handleZipChange = this.handleZipChange.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.refreshData();
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    handleZipChange(event){
        this.setState({zipcode: event.target.value}, () => {
            if(this.state.zipcode.match(/^[0-9]{5}$/)){ //make sure it's a zip code
                this.refreshData();
            }
        });
    }

    refreshData(){
        getWeather((err, res, body) => this.setState({
            weather: body
        }), this.props.type, this.state.zipcode, this.props.units);
        getCity((err, res, body) => this.setState(parseCity(body)), this.state.zipcode);
    }

    render(){
        return (
            <WeatherCard data={this.state.weather} zipcode={this.state.zipcode}
            handleZipChange={this.handleZipChange} city={this.state.city} />
        );
    }
}

function getWeather(callback, type, zipcode, units){
    const apikey = process.env.REACT_APP_WEATHER_API_KEY;
    var qstring = type+'?zip='+zipcode+'&units='+units+'&APPID='+apikey;
    var options = {
        url: 'http://api.openweathermap.org/data/2.5/'+qstring,
        json: true
    };

    request(options, callback);
}

function getCity(callback, zipcode){
    var options = {
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+zipcode,
        json: true
    }

    request(options, callback)
}

function parseCity(body){
    try{
        let address = body.results[0].formatted_address;
        let zippos = address.search(/[0-9]/);
        return {city: address.substr(0, zippos)};
    }catch(e){
        return {};
    }
}
