import React, { Component } from 'react';
import { reduxForm, Field } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage} from '../formField';
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
                <Field 
                    className="new-newsletter-form_submit"
                    small={true}
                    danger={true}
                    name="submit"
                    type="submit"
                    title="Submit"
                    component = {FormButton}
                />
                <Field 
                    className="new-newsletter-form_cancel"
                    small={true}
                    name="cancel"
                    type="button"
                    title="Cancel"
                    component = {FormButton} 
                    onClick={this.props.onCancel}
                />
                <Field 
                    className="new-newsletter-form_image"
                    small={true}
                    name="image"
                    type="file"
                    title="Image"
                    component = {FormImage}
                />
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
 }) (NewNewsletterForm);
 
export default NewNewsletterForm;