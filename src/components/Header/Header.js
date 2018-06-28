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
        let makeDropdownItem = (entry) => (
            <Dropdown.Item onClick={() => this.props.onChange(entry.index)} key={entry.label}>
                {entry.label}
            </Dropdown.Item>
        );
        return (
            <Menu>
                <Menu.Item onClick={() => {this.props.onChange(null)}}>
                    <img
                        src='https://stsiinc.com/wp-content/uploads/2016/03/STSI_white_500x162.png'
                        alt='STSI'
                        style={{width:'100px', height:'33px'}}
                    />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Card Archives'>
                        <Dropdown.Menu>
                            {this.props.cardEntries.map(makeDropdownItem)}
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
