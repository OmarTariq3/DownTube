import React from 'react';
import '../styles/Dropdown.css';

export default function FileTypeDropdown(){
return (<>
                        <div className='fileTypeDropdown'>
                        <select name="type">
                            <option value="">Choose file type</option>
                            <option value="video">Video</option>
                            <option value="audio">Audio</option>
                        </select>
                    </div>
</>);
}