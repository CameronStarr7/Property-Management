import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item_icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item_title'>
                    My door needs fixing.
                </div>
                <div className='requests-item_tenant-unit'>
                    Max - Unit 115
                </div>
                <Icon className='requests-item_arrow' icon='fas fa-sort-down'/>
                <div className='requests-item_date'>
                    April 6t
                </div>
                <Button className='requests-item_move' icon='fas fa-wrench' callback={() => }/>
            </div>
        )
    }
}

export default RequestsItem;