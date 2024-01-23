import React from 'react';
import '../styles/QualityDropdown.css';


export default function QualityDropdown() {
    return (<>
        <div className='qualityDropdown'>
            <label for="type">Choose quality</label>
            <select name="type" id="type">
                <option value="">Choose an option</option>
                <option value="video">Very High</option>
                <option value="audio">High</option>
                <option value="video">Medium</option>
                <option value="audio">Low</option>
                <option value="audio">Very Low</option>
            </select>
        </div></>);
}