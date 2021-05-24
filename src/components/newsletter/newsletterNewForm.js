import React, { Component } from 'react';
import { reduxForm, Field } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formField';
import {TextLink} from '../textLink';

class NewNewsletterForm extends Component {
    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form_title' text='Login'/>
                <Field 
                    className="new-newsletter-form_email"
                    placeholder="Email" 
                    name="email"
                    type="email"
                    title="Email"
                    component = {FormInput} 
                />
                <Field 
                    className="new-newsletter-form_password"
                    placeholder="Enter Password" 
                    name="password"
                    type="password"
                    title="Password"
                    component = {FormInput} 
                />
                <Field 
                    className="new-newsletter-form_login"
                    name="login"
                    type="submit"
                    title="Login"
                    component = {FormInput} 
                />
                <div className='new-newsletter-form_text-links'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/signup' text='Not a member? Register here'/>
                </div>
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
 }) (NewNewsletterForm);
 
export default NewNewsletterForm;