import React from 'react';
import ZipForm from "./WeatherCard/ZipForm";
import Time from "./WeatherCard/Time";
import { Card } from 'semantic-ui-react'

const WeatherCard = (props) => (
  <div className = "ui centered card">
  <Card>
    <img src="https://placeimg.com/290/290/any" alt="Weather Placeholder"/>
    <Card.Content>
      <Card.Header>City, State</Card.Header>
      <Card.Meta>
        <span className='time'>
        <Time />
        </span>
      </Card.Meta>
        <Card.Description>
        {JSON.stringify(props.data)}
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ZipForm />
    </Card.Content>
  </Card>
  </div>
)

export default WeatherCard;
