import React, {Component} from 'react';

var request = require('request');
var fs = require('fs');

const weatherdefault = {};
export const WeatherContext = React.createContext(weatherdefault);
export class WeatherData extends Component{
	constructor(props){
		super(props);
		this.state = {
			weather: null
		}
		this.refreshData();
	}

	refreshData(){
		getWeather((err, res, body) => this.setState({
			weather: body
		}));
	}

	render(){
		<WeatherContext.Provider value={this.state.weather}>
			{this.props.children}
		</WeatherContext.Provider>
	}
}

function getWeather(callback){
	const apikey = fs.readFileSync('../.apikey');
	const cityid = '4744725';
	var options = {
		url: 'http://api.openweathermap.org/data/2.5/weather?id='+cityid+'&units=imperial&APPID='+apikey,
		json: true
	};

	request(options, callback);
}
