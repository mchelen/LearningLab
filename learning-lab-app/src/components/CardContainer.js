import React, { Component } from 'react'

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

    showNextCard(){
        let newIndex = (index+1) % React.Children.count(this.props.children);
        let nextCard = React.Children.toArray(this.props.children)[newIndex];
        this.setState({
            index: newIndex,
            currentCard: nextCard
        });
    }

    render(){
        return (
            <CardTransition index={this.state.index} card={this.state.currentCard} />
        );
    }
}
