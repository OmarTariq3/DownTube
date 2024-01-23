import React from 'react';
import '../styles/URLField.css';

export default function URLField() {
    return (
        <>
            <div className='URL'>
                <label>Enter link of Youtube video</label>
                <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
                {/* value={URL} */}
            </div>
        </>
    );
}