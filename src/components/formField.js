import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input_title'>{title}</label>
                <input
                    className='form-input_input'
                    type={type}
                    {...input}
                    placeholder={placeholder}
                    />
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, input, type } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button
                    className='form-button_button'
                    type={type}
                    {...input}
                ></button>
            </div>
        )
    }
}