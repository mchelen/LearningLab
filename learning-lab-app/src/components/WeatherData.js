import React, {Component} from 'react';

var request = require('request');
var fs = require('fs');

const weatherdefault = {};
export const WeatherContext = React.createContext(weatherdefault);
export class WeatherData extends Component{
	constructor(props){
		super(props);
		this.state = {
			weather: weatherdefault
		}
		this.refreshData();
	}

	refreshData(){
		getWeather((err, res, body) => this.setState({
			weather: body
		}), this.props.type, this.props.location, this.props.units);
	}

	render(){
		<WeatherContext.Provider value={this.state.weather}>
			{this.props.children}
		</WeatherContext.Provider>
	}
}

function getWeather(callback, type, location, units){
	const apikey = fs.readFileSync('../.apikey');
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
