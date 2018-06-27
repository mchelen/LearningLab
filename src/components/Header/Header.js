import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

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
                <Menu.Item
                    active={this.state.activeItem === 'home'}
                    href='/home/'
                    onClick={this.handleItemClick}>
                    <img src="https://stsiinc.com/wp-content/uploads/2016/03/STSI_white_500x162.png" style= {{width:'100px', height:'33px'}}/>
                    </Menu.Item>
                <Menu.Menu position = 'right'>
                    <Dropdown item text='Card Archives'>
                    <Dropdown.Menu>
                    <Dropdown.Item>Weather Card</Dropdown.Item>
                    <Dropdown.Item>Traffic Card</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    <Menu.Item
                        name='aboutUs'
                        active={this.state.activeItem === 'aboutUs'}
                        href='/aboutUs/'
                        onClick={this.handleItemClick}
                        />
                </Menu.Menu>
            </Menu>
        );
    }
}
