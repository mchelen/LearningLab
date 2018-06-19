import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';

export default class CardTransition extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: this.props.card,
            visible: true
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.card !== prevProps.card){
            this.setState({
                visible: false
            });
        }
    }

    render(){
        return (
            <Transition animation='fade' duration={2000} visible={this.state.visible} onHide={
                () => this.setState({
                    card: this.props.card
                }, () => this.setState({
                    visible: true
                }))
            } onStart={() => console.log(this.state.visible)}>
                {this.state.card}
            </Transition>
        )
    }
}
