import React from 'react';
import { Card } from 'semantic-ui-react'
import TrafficMap from "./TrafficMap.js";
import Time from "../Helpers/Time.js";

const TrafficCard = (props) => (
    <Card>
        <TrafficMap zoom={props.zoom} lat={props.lat} lng={props.lng}/>
        <Card.Content>
            <Card.Header>
                {props.location}
            </Card.Header>
            <Card.Meta>
                <span className='time'>
                    <Time />
                </span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Card.Description className='traffic'>
                {props.description}
            </Card.Description>
        </Card.Content>
    </Card>
);

export default TrafficCard;
