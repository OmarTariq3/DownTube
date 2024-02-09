import React, { useState, useEffect, useRef } from 'react';
import URLField from './URLField';
import FileTypeDropdown from './FileTypeDropdown';
import QualityDropdown from './QualityDropdown';
import Notification from './Notification';
import ProgressBar from './ProgressBar';
import '../styles/Area.css';
import '../styles/submitButton.css';


export default function Area() {
  const [isSubmitted, setSubmitted] = useState(false);
  const buttonRef = useRef(null);
  const componentsDiv = document.querySelector('.componentsDiv');


  const sendRequest = (e) => {
    e.preventDefault();
    setSubmitted(!isSubmitted);
  };

  const handleButtonAnimationEnd = () => {
    buttonRef.current.classList.remove('validSubmit');
  };

  // const handleComponentsAnimationEnd = (event) => {
  //   // Check if the animation name is 'moveComponentsUp'

  //   if (event.animationName === 'moveUp') {
  //     const progressBarDiv = document.querySelector('.placingProgressBar.progressBar');
  //     progressBarDiv.classList.add('enter');
  //   }

  // };

  // const handleExitScenceProgressBar = (event) => {
  //   if (event.animationName === 'ExitSceneProgressBar') {
  //     const componentsDiv = document.querySelector('.componentsDiv');
  //     componentsDiv.classList.add('moveComponentsDown');
  //   }
  // };


  return (
    <div className='playGround'>
      <div>
        <form onSubmit={sendRequest}>
          <URLField />
          <FileTypeDropdown />
          <QualityDropdown />
          <button
            ref={buttonRef}
            className={`submitButton ${isSubmitted ? 'validSubmit' : 'errorSubmit'}`}
            type='submit'
            onAnimationEnd={handleButtonAnimationEnd}
            disabled={isSubmitted} // Add the disabled attribute
          >
            Submit
          </button>

          <Notification />
        </form>
      </div>

      <div className='placingProgressBar'>
        {isSubmitted && <ProgressBar/>}
      </div>


    </div>

  );
}


/*
- Submit button is clicked #DONE
- on Valid the box will move up #DONE
- Disable the button #DONE
- On Animation End of Box moving up
- The CircularProgressbar will be unhidden and animated in the scence with width/height 0=>90,
- The Counter will start counting,
- On 100%, the CircularProgressbar will be animated out of the scence with width/height 90=>0,
- ReActivate the Button
- On animation End the CircularProgressbar will be hidden again
- Test with Valid and UnValid
- Play with the colors
- commit
- Also commit the fullstack test thing but style it first.
-#### moveComponentsDown should triggered after the ExitSceneProgressBar 'moveComponentsDown'-
*/
/* Add the .enter class to the following div and remove exit in handleComponentsAnimationEnd */


// const handleProgressBarAnimationEnd = () => {
//   make bar hidden when animation is finished
//onAnimationEnd={handleProgressBarAnimationEnd}
// ref={divRef}
// };

