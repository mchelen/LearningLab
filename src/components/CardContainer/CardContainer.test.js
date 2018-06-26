import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'semantic-ui-react';
import CardContainer from "./CardContainer.js";

it('transitions between cards without crashing', (done) => {
    const div = document.createElement('div');
    const DummyCard = (props) => (
        <Card>
            <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
        </Card>
    );
    ReactDOM.render(
        <CardContainer cardDuration={1000} fadeTime={200}>
            <DummyCard header='header1' description='description1' />
            <DummyCard header='header1' description='description2' />
        </CardContainer>
    , div);
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
        done();
    }, 3000);
});
