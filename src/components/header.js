import React from 'react';


export function Header() {
        
        return (
                <div className='header'>
                    <h1 className='header_title'>{title}</h1>
                    <p className='header_subtitle'>{subtitle}</p>
                </div>
        )
}

export default function HeaderBar() {
        return (
                <div className='bar'></div>
        )
}