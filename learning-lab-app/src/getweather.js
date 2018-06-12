var request = require('request');
var fs = require('fs');

function getweather(callback){
	const apikey = fs.readFileSync('../.apikey');
	const cityid = '4744725';
	var options = {
		url: 'http://api.openweathermap.org/data/2.5/weather?id='+cityid+'&units=imperial&APPID='+apikey,
		json: true
	};

	request(options, callback);
}

getweather((err, res, body) => console.log(body));
