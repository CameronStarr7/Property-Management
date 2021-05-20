import React from 'react';

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function NewsletterBox({date}) {
    return (
        <div className='newsletter-box'>
            <div className='newsletter-box_day'>{date.getDate()}</div>
            <div className='newsletter-box_month-year'>{months[date.getMonth()]} {date.getFullYear()}</div>
        </div>
    )
}