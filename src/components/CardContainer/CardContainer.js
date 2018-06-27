import React, { Component } from 'react';
import CardTransition from './CardTransition.js';

export default class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
        }
    }

    componentDidMount(){
        this.updateTimer = setInterval(() => this.showNextCard(), this.props.cardDuration);
    }

    componentWillUnmount(){
        clearInterval(this.updateTimer);
    }

    showNextCard(){
        let newIndex = (this.state.index+1) % React.Children.count(this.props.children);
        this.setState({
            index: newIndex,
        });
    }

    render(){
        return (
            <CardTransition index={this.state.index} fadeTime={this.props.fadeTime}>
                {this.props.children}
            </CardTransition>
        );
    }
}
