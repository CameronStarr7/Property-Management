import React, { Component } from 'react';
import { reduxForm, Field } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formField';
import {TextLink} from '../textLink';

class SigninForm extends Component {
    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='sign-in-form'>
                <FormTitle className='sign-in-form_title' text='Login'/>
                <Field 
                    className="sign-in-form_email"
                    placeholder="Email" 
                    name="email"
                    type="email"
                    title="Email"
                    component = {FormInput} 
                />
                <Field 
                    className="sign-in-form_password"
                    placeholder="Enter Password" 
                    name="password"
                    type="password"
                    title="Password"
                    component = {FormInput} 
                />
                <Field 
                    className="sign-in-form_login"
                    name="login"
                    type="submit"
                    title="Login"
                    component = {FormInput} 
                />
                <div className='sign-in-form_text-links'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/signup' text='Not a member? Register here'/>
                </div>
            </form>
        );
    }
}

SigninForm = reduxForm({
    form: "signin"
 }) (SigninForm);
 
export default SigninForm;