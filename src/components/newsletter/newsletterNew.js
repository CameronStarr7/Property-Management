import React, { Component } from 'react';
import SigninForm from '../auth/signinForm'; 
import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {  

    onSubmit = (fields) => {
        // if(button == 'submit') {
        //     //save new newsletter on the backend. perform a post request here.
        //     console.log('trying to handle submit on backend.');
        // }
        this.props.history.push('/dashboard');
    }

    onCancel = () => {
        // this.props.history.push('/dashboard')
        console.log('trying to cancel');
    }

    render() { 
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    } 
}

export default NewNewsletter;