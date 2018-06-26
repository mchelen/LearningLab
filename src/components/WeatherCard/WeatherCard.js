import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import ZipForm from "./ZipForm.js";
import Time from "../Helpers/Time.js";

import './WeatherCard.css';

export default class WeatherCard extends Component{
    render(){
        let temperature, weatherIcon;
        try{
            temperature = this.props.data.main.temp;
            weatherIcon = 'http://openweathermap.org/img/w/'+this.props.data.weather[0].icon+'.png';
        }catch(e){
            temperature = null;
            weatherIcon = null;
        }
        return (
            <Card>
                <Image className='weatherIcon' src={weatherIcon} size='small' centered />
                <Card.Content>
                    <Card.Header>
                        {this.props.city}
                    </Card.Header>
                    <Card.Meta>
                        <span className='time'>
                            <Time />
                        </span>
                    </Card.Meta>
                    <Card.Description className='temperature'>
                        {Math.round(temperature)+'\u00b0F'}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <ZipForm value={this.props.zipcode} handler={this.props.handleZipChange} />
                </Card.Content>
            </Card>
        );
    }
}
