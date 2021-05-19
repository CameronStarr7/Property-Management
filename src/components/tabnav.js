import React, { Component } from 'react';

class TabNav extends Component {
    render() {
        return (
            <div className='tab-nav'>
                <div className='tab-nav_tabs'>
                {
                    this.props.tabs.map((tab, index) => {
                        const className= `tab-nav_tab ${tab.active ? 'tab-nav_active' : ''}`
                        return <a key={index} onClick={() => this.props.handleClick(tab.title)} className={className}>{tab.title}</a>
                    })
                }
                </div>
                {
                    this.props.tabs.map((tab, index) => {
                        if(tab.active) {
                            return (
                            <div key={index} className='tab-nav_component'>
                                {tab.component}
                            </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default TabNav;