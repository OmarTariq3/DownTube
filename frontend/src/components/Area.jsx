import React, { useState, useRef } from 'react';
import URLField from './URLField';
import FileTypeDropdown from './FileTypeDropdown';
import QualityDropdown from './QualityDropdown';
import Notification from './Notification';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/Area.css';
import '../styles/submitButton.css';
import 'react-circular-progressbar/dist/styles.css';

export default function Area() {
  const [isSubmitted, setSubmitted] = useState(true);
  const buttonRef = useRef(null);

  const sendRequest = (e) => {
    e.preventDefault();
    setSubmitted(!isSubmitted);
  };

  const handleAnimationEnd = () => {
    // Add logic for the second animation here
    buttonRef.current.classList.remove('validSubmit');
  };

  return (
    <>
      <div className='playGround'>
        <div className={`${isSubmitted ? 'moveComponentsUp' : 'moveComponentsDown'}`}>
          <form onSubmit={sendRequest}>
            <URLField />
            <FileTypeDropdown />
            <QualityDropdown />
            <button
              ref={buttonRef}
              className={`submitButton ${isSubmitted ? 'validSubmit' : 'errorSubmit'}`}
              type="submit"
              onAnimationEnd={handleAnimationEnd}
            >
              Submit
            </button>
            <Notification />
          </form></div>
        {/* <CircularProgressbar value={percentage} text={`${percentage}`} /> */}
      </div>
    </>
  );
}
