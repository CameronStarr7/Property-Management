import React, { Component } from 'react';
import NewsletterBox from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }
    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays Fam',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into the electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/968x258'
        }

        return (
            <div className='newsletter-grid'>
            <Button className='newsletter-grid_button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
            <NewsletterBox date={new Date()}/> 
            <NewsletterArchive/>
            <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;