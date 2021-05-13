import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'redux-form/lib/actions';
import SigninForm from './signinForm';

class Signin extends Component {

    onSubmit = (fields) => {
        console.log('trying to handle submit');
    }
    render() {
        return (
            <div className='sign-in'>
                <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signin);