import React from 'react';
import URLField from './URLField';
import FileTypeDropdown from './FileTypeDropdown';
import QualityDropdown from './QualityDropdown';
import Notification from './Notification';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/Area.css';
import 'react-circular-progressbar/dist/styles.css';


let percentage = 33;

export default function Area() {
    return (
        <>
            <div className='playGround'>
                <form>
                <URLField/>
                <FileTypeDropdown/>
                <QualityDropdown/>
                    <button className='submitButton' type="submit">Submit</button>
                {/* <Notification/> */}
                    {/* <CircularProgressbar value={percentage} text={`${percentage}`} /> */}
                </form>
            </div>
        </>
    );
}