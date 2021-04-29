import React, { Component } from 'react';
import { reduxForm, Field } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formField';
import {TextLink} from '../textLink';

class SignupForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <FormTitle className='sign-up-form_title' text='Login'/>

                <Field 
                    className="sign-up-form_fullname"
                    placeholder="Enter Your Full Name" 
                    name="fullname"
                    type="text"
                    title="Full Name"
                    component = {FormInput} 
                />
                <Field 
                    className="sign-up-form_unit"
                    placeholder="Enter Unit #" 
                    name="unit"
                    type="text"
                    title="Unit #"
                    component = {FormInput} 
                />
                <Field 
                    className="sign-up-form_email"
                    placeholder="Email" 
                    name="email"
                    type="email"
                    title="Email"
                    component = {FormInput} 
                />
                <Field 
                    className="sign-up-form_password"
                    placeholder="Enter Password" 
                    name="password"
                    type="password"
                    title="Password"
                    component = {FormInput} 
                />
                <Field 
                    className="sign-up-form_create-account"
                    name="createaccount"
                    type="submit"
                    title="Create Account"
                    component = {FormInput} 
                />
                <div className='sign-up-form_text-links'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/signup' text='Not a member? Register here'/>
                </div>
            </form>
        );
    }
}

SignupForm = reduxForm({
    form: "signup"
 }) (SignupForm);
 
export default SignupForm;