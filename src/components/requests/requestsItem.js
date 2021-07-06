import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {

    constructor()  {
        super() 

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item_icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item_title'>
                    <div className='requests-item_title_text'>My door needs fixing.</div>
                    <Icon callback={() => this.toggleDropdown} className='requests-item_title_arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='requests-item_tenant-unit'>
                    Max - Unit 115
                </div>
                <Icon className='requests-item_arrow' icon='fas fa-sort-down'/>
                <div className='requests-item_date'>
                    04/06/1997
                </div>

                <Button className='requests-item_move' icon='fas fa-wrench' callback={() => }/>

                <div className='requests-item_description'>
                    <AnimateHeight
                        duration={300}
                        height={100}
                    >
                        <div className='requests-item_description'>
                            <img 
                                className='requests-item_description-img'
                                src = 'http://via.placeholder.com/'
                            />
                            <p className='requests-item_description-text'>
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        )
    }
}

export default RequestsItem;