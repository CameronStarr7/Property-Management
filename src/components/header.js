import React from 'react';


export function Header({ title, subtitle }) {
        
        return (
                <div className='header'>
                    <h1 className='header_title'>{title}</h1>
                    <p className='header_subtitle'>{subtitle}</p>
                </div>
        )
}

export default function HeaderBar({hideBar}) {

        if(!hideBar) {
                return <div></div>
        } else {
                <div className='bar'></div>
        }
}