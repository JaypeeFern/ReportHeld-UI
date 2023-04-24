import React from 'react'
import Icon from '@mdi/react';
import { mdiExclamationThick } from '@mdi/js';

export default function PageNotFound() {
    return (
        <div className='flex-grow flex items-center justify-center me-7 text-7xl '>
            <h1 className='font-bold'>PAGE NOT FOUND</h1>
            <Icon path={mdiExclamationThick} size={4}/>
        </div>
    )
}