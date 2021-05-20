import React, { Component } from 'react';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
            {/* add button */}
            <NewsletterBox date={new Date()}/>
            {/* archive */}
            {/* content */}
            </div>
        )
    }
}

export default NewsletterGrid;