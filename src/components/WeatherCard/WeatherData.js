import React, {Component} from 'react';
import WeatherCard from './WeatherCard.js';
import { getWeather, getCity, parseCity } from './APIfuncs.js';

export default class WeatherData extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null,
            zipcode: this.props.zipcode,
            city: null
        };
        this.handleZipChange = this.handleZipChange.bind(this);
        this.mounted = false;
    }

    componentDidMount(){
        this.mounted = true;
        this.refreshData();
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    handleZipChange(event){
        if(this.mounted){
            this.setState({zipcode: event.target.value}, () => {
                if(this.state.zipcode.match(/^[0-9]{5}$/)){ //make sure it's a zip code
                    this.refreshData();
                }
            });
        }
    }

    refreshData(){
        getWeather((err, res, body) => {
            if(this.mounted){
                this.setState({
                    weather: body
                });
            }
        }, this.props.type, this.state.zipcode);
        getCity((err, res, body) => {
            if(this.mounted){
                this.setState(parseCity(body));
            }
        }, this.state.zipcode);
    }

    render(){
        return (
            <WeatherCard
                data={this.state.weather}
                zipcode={this.state.zipcode}
                handleZipChange={this.handleZipChange}
                city={this.state.city}
            />
        );
    }
}
