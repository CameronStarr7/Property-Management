import React, { Component } from 'react';
import { reduxForm, Field } from 'react-form';
import { connect } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage} from '../formField';

import { ROOT_URL } from '../../config';

class  NewNewsletterForm extends Component {
    render() {

        const { handleSubmit, formTitle, newsletterEdit } = this.props;
        const { 
            fieldOnePlaceholder, fieldOneTitle,
            fieldTwoPlaceholder, fieldTwoTitle
        } = this.props;

        var title = null;
        var body = null;
        var imageUrl = null;
        if(newsletterToEdit) {
            title = newsletterEdit.title;
            body = newsletterToEdit.body;
            imageUrl = newsletterToEdit.imageUrl;
        }

        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form_title' text={formTitle}/>
                <Field 
                    className="new-newsletter-form_newsletter-title"
                    placeholder={fieldOnePlaceholder}
                    name="title"
                    type="text"
                    title={fieldOneTitle}
                    component = {FormInput}
                    editValue={title ? title : null}
                />
                <Field 
                    className="new-newsletter-form_body"
                    placeholder={fieldTwoPlaceholder}
                    name="body"
                    type="text"
                    title={fieldTwoTitle}
                    component = {FormTextArea} 
                    editValue={body ? body : null}
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
                    imageUrl={this.props.initialValues.imageUrl ?
                    `${this.props.initialValues.imageUrl}` :
                    'http://via.placeholder.com/150x137'}
                />
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
 }) (NewNewsletterForm);

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters;
    return {
        newsletterToEdit
    }
}
NewNewsletterForm = connect(mapStateToProps)(NewNewsletterForm);
 
export default NewNewsletterForm;