import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequireAdmin extends Component {
    render() {
        if(this.props.admin) {
            return{...this.props.children}
        }
        return <div></div>
    }
}   

function mapStateToProps(state) {
    const { admin } = state.Authentication.user;
    return { admin }
}

RequireAdmin = connect(mapStateToProps)(Authentication);

export default RequireAdmin;