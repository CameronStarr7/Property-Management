import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsletterBox from './newsletterBox';
class NewsletterDetail extends Component {

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }
    
    render() {

        return (
            <div className='newsletter-detail'>
                Newsletter Detail 
                <NewsletterBox/>
                <NewsletterLatest/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {newsletterToEdit} = state.newsletters
    return {newsletterToEdit};
}

export default connect(mapStateToProps, actions)(NewsletterDetail);