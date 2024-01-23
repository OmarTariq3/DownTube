import React from 'react';
import '../styles/Area.css';

export default function Area() {
    return (
        <>
            <div className='dashed-border-area'>
                <form>
                    <div className='URL'>
                        <label>Enter link of Youtube video</label>
                        <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
                        {/* value={URL} */}
                    </div>
                    <div className='type-dropdown'>
                        <label for="type">Choose file type</label>
                        <select name="type" id="type">
                            <option value="">Please choose an option</option>
                            <option value="video">Video</option>
                            <option value="audio">Audio</option>
                        </select>
                    </div>
                    <div className='quality-dropdown'>
                    <label for="type">Choose quality</label>
                        <select name="type" id="type">
                            <option value="">Please choose an option</option>
                            <option value="video">Very High</option>
                            <option value="audio">High</option>
                            <option value="video">Medium</option>
                            <option value="audio">Low</option>
                            <option value="audio">Very Low</option>
                        </select>
                    </div>
                    <button className='submit-button' type="submit">Submit</button>
                    <div className='infromative-area'>Invalid URL, Please Choose file type, Please Choose quality</div>
                    <div className='loading-bar'></div>
                </form>
            </div>
        </>
    );
}

//Label
//URL
//Label
//Type dropdown
//Label
//Quality dropdown
//Submit button
//Informative area