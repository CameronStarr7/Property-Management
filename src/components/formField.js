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

export class FormTextArea extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-textarea`}>
                <label className='form-textarea_title'>{title}</label>
                <textarea
                    className='form-textarea_input'
                    type={type} 
                    {...input}
                    placeholder={placeholder}
                    
                >

                </textarea>
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, input, type, small, danger } = this.props;
        
        return (
            <div className={`${className} ${small ? 'form-button-small' : 'form-button'}`}>
                <button
                    className={`
                        $ {small ? 'form-button-small' : 'form-button'}_button
                        ${danger ? 'form-button-small_danger : ''}
                    `}
                    type={type}
                    {...input}
                >
                {title}
                </button>
            </div>
        )
    }
}