import React from 'react';
import '../styles/Header.css';

// Import the image using require
import downloadIcon from '../assets/images/download-icon.png';

export default function Header() {
    return (
        <>
            <header>
                <h2 className='h2Header'>
                    <span className='logo'><img src={downloadIcon} alt='Download Icon' /></span>
                    <span className='down-text'>Down</span>
                    <span className='tube-text'>tube</span>
                </h2>
            </header>
        </>
    );
}

