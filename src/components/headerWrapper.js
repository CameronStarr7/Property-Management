import React, { Component } from 'react';
import HeaderBar from './headerBar';

class headerWrapper extends Component {
    render() {
        return [
            <div className='header-wrapper'>
                <h1 className='header-wrapper_title'>Welcome to HOA Manager!</h1>
                <p className='header-wrapper_subtitle'>Please login to continue</p>
            </div>
            HeaderBar(), 
            this.props.children
        ]
    }
}

export default HeaderWrapper;