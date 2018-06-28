var request = require('request');

export function getWeather(callback, type, zipcode){
    const apikey = process.env.REACT_APP_WEATHER_API_KEY;
    const units = 'imperial';
    var qstring = type+'?zip='+zipcode+'&units='+units+'&APPID='+apikey;
    var options = {
        url: 'http://api.openweathermap.org/data/2.5/'+qstring,
        json: true
    };

    request(options, callback);
}

export function getCity(callback, zipcode){
    var options = {
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+zipcode,
        json: true
    }

    request(options, callback)
}

export function parseCity(body){
    let address;
    try{
        address = body.results[0].formatted_address;
    }catch(e){
        address = '';
    }
    let zippos = address.search(/[0-9]/);
    let result = address.substr(0, zippos-1);
    if(result === ''){
        return {};
    }else{
        return {city: result};
    }
}
