import React, { Component } from 'react';

class RequestsBox extends Component {
    render() {
        const { count, title } = this.props;
        return (
            <div className='requests-box'>
                <div className='requests-box_count'>2</div>
                <div className='requests-box_title'></div>
                <div className='requests-box_point'></div>
            </div>
        )
    }
}

export default RequestsBox;