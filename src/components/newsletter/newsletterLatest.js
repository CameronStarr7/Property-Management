import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../button';

class NewsletterLatest extends Component {

    handleEdit = () => {
        this.props.history.push('/newsletter/edit');
    }

    render() {
        const { title, imageUrl, body, _id }= this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest_title'>{title}</h1>
                <img className='newsletter-latest_image' src={imageUrl}/>
                <Button className='newsletter-latest_button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                <div className='newsletter-latest_body'>
                    <p>{body}</p> 
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter
    }
}
export default connect(mapStateToProps)(NewsletterLatest)