import React, { Component } from 'react';

class RequestsBox extends Component {
    render() {
        const { count, title } = this.props;
        return (
            <a onClick={(title) => this.props.changeSelectedRequestType(title)} className='requests-box requests-box-inactive'>
                <div className='requests-box_count'>{count}</div>
                <div className='requests-box_title'>{title}</div>
                <div className='requests-box_point'></div>
            </a>
        )
    }
}

export default RequestsBox;