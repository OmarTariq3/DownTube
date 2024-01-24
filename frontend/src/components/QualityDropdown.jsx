import React from 'react';
import '../styles/Dropdown.css';


export default function QualityDropdown() {
    return (<>
        <div className='qualityDropdown'>
            <select name="type">
                <option value="">Choose quality</option>
                <option value="video">Very High</option>
                <option value="audio">High</option>
                <option value="video">Medium</option>
                <option value="audio">Low</option>
                <option value="audio">Very Low</option>
            </select>
        </div></>);
}