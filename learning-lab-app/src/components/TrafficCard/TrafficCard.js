import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class TrafficCard extends Component{
    render(){
        return (
            <Card>
                <Image className='trafficIcon' src='http://thestatehousefile.com/wp-content/uploads/2012/10/stock-traffic-1.jpg' size='medium' centered />
                <Card.Content>
                    <Card.Header>
                    <p> Arlington, VA </p>
                    </Card.Header>
                    <Card.Meta>
                    <p> Time </p>
                    </Card.Meta>
                        <Card.Description className='traffic'>

                        </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
        )
    }
}
