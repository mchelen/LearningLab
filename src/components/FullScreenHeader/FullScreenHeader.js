import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import './FullScreenHeader.css';

export default class Header extends Component {
    render(){
        return (
            <Menu>
            <Menu.Menu>
                <Menu.Item
                    href = '/' >
                        <img
                            src='https://stsiinc.com/wp-content/uploads/2016/03/STSI_white_500x162.png'
                            alt='STSI'
                            style={{width:'100px', height:'33px'}}
                        />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        );
    }
}
