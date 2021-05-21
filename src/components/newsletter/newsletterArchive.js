import React, { Component } from 'react';

export default function ArchiveItem({title, date}) {
    return (
        <div className='archive-item'>
            <div className='archive-item_title'>{title}</div>
            <div className='archive-item_date'>{date}</div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive_title'>Archive</div>
                <div className='newsletter-archive_items'>
                    {/* newsletter items*/}
                    <ArchiveItem title='hey' date='this is  the date'/>
                </div>
            </div>
        )
    }
}

export default NewsletterArchive;