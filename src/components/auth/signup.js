import React, { Component } from 'react';
import * as actions from '../../actions';
import SignupForm from './signupForm';

class Signup extends Component {

    onSubmit = (fields) => {
        this.props.signup(fields, () => {
            console.log('navigate to dashboard');
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signup);