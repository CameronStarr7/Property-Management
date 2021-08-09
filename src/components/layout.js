import React, { Component } from 'react';
import HeaderBar from './headerBar';
import Header from './header';

class Layout extends Component {
    render() {
        return (
            <div className='grid'>
                <Header
                    title='Welcome to HOA Manager!'
                    subtitle='Please login to continue'
                />
                <HeaderBar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;