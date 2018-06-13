import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const WeatherCard = () => (
  <Card>
    <img src="https://placeimg.com/290/290/any" />
    <Card.Content>
      <Card.Header>City, State</Card.Header>
      <Card.Meta>
        <span className='date'>Time</span>
      </Card.Meta>
      <Card.Description>Weather in Farenheit</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <p> add form here to change zipcode? </p>
      </a>
    </Card.Content>
  </Card>
)

export default WeatherCard;
