import React from 'react';
import '../styles/URLField.css';

export default function URLField() {
    return (
        <>
            <div className='URL'>
            <input type="url" name="url"/>
            {/* placeholder="https://www.youtube.com/" pattern="https://www\.youtube\.com/watch\?v=.+" required */}
            </div>
        </>
    );
}