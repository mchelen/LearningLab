import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

import './Header.css';

export default class Header extends Component {
    handleItemClick(event, {name}){
        this.setState({
            activeItem: name
        });
    }

    render(){
        return (
            <Menu>
                <Menu.Item
                    href = '/' >
                        <img
                            src='https://stsiinc.com/wp-content/uploads/2016/03/STSI_white_500x162.png'
                            alt='STSI'
                            style={{width:'100px', height:'33px'}}
                        />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Card Archives'>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <a href = '/WeatherCard'> Weather Card </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href = '/TrafficCard'> Traffic Card </a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                        name='aboutUs'
                        href='/aboutUs/'
                        />
                </Menu.Menu>
            </Menu>
        );
    }
}
