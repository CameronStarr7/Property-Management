import React, { Component } from 'react';

import Button from '../button';

import history from '../../history';

import { ROOT_URL } from '../../config';

class NewsletterLatest extends Component {

    handleEdit = () => {
        history.push(`/newsletter/edit/${this.props._id}`);
    }

    
    render() {
        const { title, imageUrl, body}= this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest_title'>{title}</h1>
                <img className='newsletter-latest_image' src={`${ROOT_URL}/${imageUrl}`}/>
                <RequireAdmin>
                    <Button className='newsletter-latest_button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                </RequireAdmin>
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