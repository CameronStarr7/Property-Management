import React, { Component } from 'react';
import { reduxForm, Field } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea } from '../formField';
import {TextLink} from "../textLink";


class NewNewsletterForm extends Component {
    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form_title' text='New Newsletter'/>
                <Field 
                    className="new-newsletter-form_newsletter-title"
                    placeholder="Newsletter Title"
                    name="title"
                    type="text"
                    title="Newsletter Title"
                    component = {FormInput} 
                />
                <Field 
                    className="new-newsletter-form_body"
                    placeholder="Newsletter Body"
                    name="body"
                    type="text"
                    title="Body"
                    component = {FormTextArea} 
                />
                
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
 }) (NewNewsletterForm);
 
export default NewNewsletterForm;