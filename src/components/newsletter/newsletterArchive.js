import React, { Component } from 'react';

export default function ArchiveItem({title, date}) {
    return (
        <div className='archive-item archive-items_item'>
            <div className='archive-item_title'>{title}</div>
            <div className='archive-item_date'>
            {date.getMonth() +1 }
            /
            {date.getDate() }
            /
            {date.getFullYear() -2000 }
            </div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive_title'>Archive</div>
                <div className='newsletter-archive_items archive-items'>
                    {/* newsletter items*/}
                    <ArchiveItem title='hey' date={new Date()}/>
                    <ArchiveItem title='hey' date={new Date()}/>
                    <ArchiveItem title='hey' date={new Date()}/>
                    <ArchiveItem title='hey' date={new Date()}/>
                </div>
            </div>
        )
    }
}

export default NewsletterArchive;