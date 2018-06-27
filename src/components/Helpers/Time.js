import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: null
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.tick();
        this.intervalID = setInterval(this.tick, 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    
    tick(){
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    
    render(){
        return (
            <p className='App-clock'>
                {this.state.time}
            </p>
        );
    }
}
