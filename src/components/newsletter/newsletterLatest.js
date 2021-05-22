import React, { Component } from 'react';
import Button from '../button';

class NewsletterLatest extends Component {

    handleEdit = () => {
        console.log('trying to handle edit');
    }

    render() {
        const { title, imageUrl, body }= this.props;
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

export default NewsletterLatest; 