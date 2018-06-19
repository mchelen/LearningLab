import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';

export default class CardTransition extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            visible: true
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.index !== prevProps.index){
            this.setState({
                visible: false
            });
        }
    }

    render(){
        return (

                <Transition animation={'fade'} duration={2000} visible={this.state.visible} onHide={
                    () => this.setState({
                        index: this.props.index
                    }, () => this.setState({
                        visible: true
                    }))
                }>
                  <div>
                    {React.Children.toArray(this.props.children)[this.state.index]}
                  </div>
                </Transition>

        )
    }
}
