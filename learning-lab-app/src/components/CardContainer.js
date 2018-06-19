import React, { Component } from 'react';
import CardTransition from "./CardTransition.js";

export default class CardContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
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
        this.setState({
            index: newIndex,
        });
    }

    render(){
        return (
            <CardTransition index={this.state.index}>
                {this.props.children}
            </CardTransition>
        );
    }
}
