import React, {Component} from 'react';
import {geolocated} from 'react-geolocated';
import WeatherCard from './WeatherCard.js';

var request = require('request');

export default function WeatherData(props){
	let GeoWeatherCaller = geolocated()(WeatherCaller);
	return props.geo ? (
		<GeoWeatherCaller {...props} />
	) : (
		<WeatherCaller {...props} />
	);
}

class WeatherCaller extends Component{
	constructor(props){
		super(props);
		this.state = {
			weather: null
		}
		this.refreshData = this.refreshData.bind(this);
		this.refreshData();
	}

	refreshData(){
		let useGeo = this.props.isGeolocationAvailable && this.props.isGeolocationEnabled;
		console.log(this.props.coords);
		let loc = (useGeo && this.props.coords) ? (
			{type: 'coords', lat: this.props.coords.latitude, lon: this.props.coords.longitude}
		) : this.props.location;	
		getWeather((err, res, body) => this.setState({
			weather: body
		}), this.props.type, loc, this.props.units);
	}

	render(){
		return (
			<WeatherCard data={this.state.weather} />
		);
	}
}

function getWeather(callback, type, location, units){
	const apikey = '9dd566342853579b7ca76a7f2125741e';
	var locstring;
	if(location.type === 'coords'){
		locstring = 'lat='+location.lat+'&lon='+location.lon;
	}else{
		locstring = location.type+'='+location.loc;
	}
	var qstring = type+'?'+locstring+'&units='+units+'&APPID='+apikey;
	var options = {
		url: 'http://api.openweathermap.org/data/2.5/'+qstring,
		json: true
	};

	request(options, callback);
}
