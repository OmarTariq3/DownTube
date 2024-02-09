import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/custom.css';
import '../styles/Area.css';




export default function ProgressBar() {
  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage < 100 ? prevPercentage + 5 : prevPercentage
      );
    }, 500);
  
    const progressBar = document.querySelector('.placingProgressBar .progressBar');
    if (percentage === 100 && progressBar) {
      console.log(percentage + '%');
      progressBar.classList.add('exit');
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [percentage]); // Add 'percentage' as a dependency
  


  return (
    <div className={`progressBar ${percentage !== null && 'enter'}`}>
      {percentage !== null ? (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}`}
          styles={buildStyles({
            textSize: '25px',
            textColor: '#fff',
            trailColor: '#fff',
          })}
        />
      ) : (null)}
    </div>
  );
}
