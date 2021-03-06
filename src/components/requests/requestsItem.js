import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from '../../icon';
import Button from '../../button';

import AnimateHeight from 'react-animate-height';

import { ROOT_URL } from '../../config';

import RequireAdmin from '../auth/requireAdmin';

class RequestsItem extends Component {

    constructor()  {
        super()

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        var element = document.getElementById(`${this.props._id}-requests-item`);
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    handleStatus = () => {
        const { _id, status } = this.props;
        this.props.changeStatus({_id, status}, () => {
            this.props.fetchRequests();
        })
    }

    render() {
        const { title, body, date, imageUrl, status, _id } = this.props;
        const parsedDate = new Date(date);

        var moveButtonIcon = 'fas fa-wrench';
        var mainIcon = 'fas fa-exclamation-triangle';
        if(status = 'in-progress') {
            moveButtonIcon = 'fas fa-check-square'
            mainIcon = 'fas fa-wrench'
        } else if(status == 'complete') {
            moveButtonIcon = 'fas fa-exclamation-triangle'
            mainIcon - 'fas fa-check-square'
        }

        return (
            <div id={`${_id}-requests-item`} className='requests-item'>
                <Icon className='requests-item_icon' icon={mainIcon}/>
                <div className='requests-item_title'>
                    <div className='requests-item_title_text'>{title}</div>
                    <Icon callback={() => this.toggleDropdown} className='requests-item_title_arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='requests-item_tenant-unit'>
                    Max - Unit 115
                </div>
                <Icon className='requests-item_arrow' icon='fas fa-sort-down'/>
                <div className='requests-item_date'>
                    { parsedDate.getMonth() + 1 }
                    /
                    { parsedDate.getDate() }
                    /
                    { parsedDate.getFullYear() - 2000 } 
                </div>

                <RequireAdmin>
                    <Button className='requests-item_move' icon={moveButtonIcon} callback={() => this.handleStatus()} />
                </RequireAdmin>
                
                <div className='requests-item_description'>
                    <AnimateHeight
                        duration={300}
                        height={this.state.height}
                    >
                        <div className='item-description'>
                            <img 
                                className='item_description_img'
                                src = {`${ROOT_URL}/${imageUrl}`}
                            />
                            <p className='item_description_text'>
                                {body}
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        )
    }
}

RequestsItem = connect(null, actions)(RequestsItem);

export default RequestsItem;