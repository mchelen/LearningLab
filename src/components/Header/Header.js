import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import './Header.css';


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: null
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(event, {name}){
        this.setState({
            activeItem: name
        });
    }

    render(){
        return (
            <Menu>
                <Menu.Item name = 'STSI Learning Lab'
                    />
                    <Menu.Item
                        name='CardArchives'
                        active={this.state.activeItem === 'Card Archives'}
                        onClick={this.handleItemClick}
                    />
                <Menu.Item
                    name='aboutUs'
                    active={this.state.activeItem === 'aboutUs'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}
