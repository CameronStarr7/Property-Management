import React from 'react';

export function Icon({className, icon}) {
    return (
        <div className={className}>
            <i className={icon}></i> 
        </div>
    )
}