import React, { Component } from 'react';
import CardTransition from "./CardTransition.js";

export default class CardContainer extends Component {
    constructor(props){
        super(props);

        let childArray = React.Children.toArray(this.props.children);
        this.state = {
            index: 0,
            currentCard: childArray[0]
        }

        this.showNextCard = this.showNextCard.bind(this);
    }
    
    componentDidMount(){
        this.updateTimer = setInterval(() => this.showNextCard(), 10000);
    }

    componentWillUnmount(){
        clearInterval(this.updateTimer);
    }

    showNextCard(){
        let newIndex = (this.state.index+1) % React.Children.count(this.props.children);
        let nextCard = React.Children.toArray(this.props.children)[newIndex];
        this.setState({
            index: newIndex,
            currentCard: nextCard
        });
    }

    render(){
        return (
            <CardTransition card={this.state.currentCard} />
        );
    }
}
