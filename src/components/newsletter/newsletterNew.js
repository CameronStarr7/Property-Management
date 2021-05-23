import React, { Component } from 'react';
import SigninForm from '../auth/signinForm'; 
import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {  

    onSubmit = (fields) => {

    }

    render() { 
        return (
            <div className='new-newsletter'>
                <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    } 
}

export default NewNewsletter;