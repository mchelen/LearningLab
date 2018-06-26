import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    
    tick() {
        this.setState({
            time: new Date()
        });
    }
    
    render() {
        return (
            <p className="App-clock">
                {this.state.time.toLocaleString()}
            </p>
        );
    }
}
