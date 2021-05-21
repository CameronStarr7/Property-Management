import React, { Component } from 'react';
class NewsletterLatest extends Component {
    render() {
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest_title'>Title goes here</h1>
                <img className='newsletter-latest_image' src='http://via.placeholder.com/960x258'/>
                <div className='newsletter-latest_body'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500's when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into the electronic typesetting, remaining essentially unchanged. It was popularized in the 1960's with the release of Letraset sheets containing Lorem ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        )
    }
}