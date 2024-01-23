import React from 'react';
import '../styles/FileTypeDropdown.css';

export default function FileTypeDropdown(){
return (<>
                        <div className='fileTypeDropdown'>
                        <label for="type">Choose file type</label>
                        <select name="type" id="type">
                            <option value="">Choose an option</option>
                            <option value="video">Video</option>
                            <option value="audio">Audio</option>
                        </select>
                    </div>
</>);
}