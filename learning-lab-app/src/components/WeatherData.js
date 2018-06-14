import React, {Component} from 'react';
import WeatherCard from './WeatherCard.js';

var request = require('request');

export default class WeatherData extends Component{
	constructor(props){
		super(props);
		this.state = {
			weather: null
		}
		this.refreshData = this.refreshData.bind(this);
		this.refreshData();
	}

	refreshData(){
		getWeather((err, res, body) => this.setState({
			weather: body
		}), this.props.type, this.props.location, this.props.units);
	}

	render(){
		return (
			<WeatherCard data={this.state.weather} />
		);
	}
}

function getWeather(callback, type, location, units){
	const apikey = '9dd566342853579b7ca76a7f2125741e';
	var qstring = type+'?'+location.type+'='+location.loc++'&units='+units+'&APPID='+apikey;
	var options = {
		url: 'http://api.openweathermap.org/data/2.5/'+qstring,
		json: true
	};

	request(options, callback);
}
