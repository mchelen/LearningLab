import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import TrafficMap from "./TrafficMap.js";
import Time from "../Helpers/Time.js";

export default class TrafficCard extends Component{
    render(){
        return (
            <Card>
                  <TrafficMap zoom = {12} lat = {38.9} lng = {-77.08}/>
                <Card.Content>
                    <Card.Header>
                      <p> Arlington, VA </p>
                    </Card.Header>
                    <Card.Meta>
                      <span className='time'>
                        <Time />
                      </span>
                    </Card.Meta>
                        <Card.Description className='traffic'>
                          <p> Current traffic in STSI area </p>
                        </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
