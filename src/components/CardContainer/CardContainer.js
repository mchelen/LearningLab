import React, { Component } from 'react';
import CardTransition from './CardTransition.js';

export default class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidMount(){
        this.updateTimer = setInterval(() => this.showNextCard(), this.props.cardDuration);
    }

    componentWillUnmount(){
        clearInterval(this.updateTimer);
    }

    componentDidUpdate(prevProps){
        if(this.props.fixedCard !== prevProps.fixedCard){
            if(this.props.fixedCard === null){
                this.updateTimer = setInterval(() => this.showNextCard(), this.props.cardDuration);
                this.setState({
                    index: 0
                });
            }else{
                clearInterval(this.updateTimer);
                this.setState({
                    index: this.props.fixedCard
                });
            }
        }
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
