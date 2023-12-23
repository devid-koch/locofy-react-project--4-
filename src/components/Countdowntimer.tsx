

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CountdownTimer.css';

import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';


interface CountdownTimerProps {
  durationInSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ durationInSeconds }) => {
  const [timeRemaining, setTimeRemaining] = useState(durationInSeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let IntervalId:any;

    if (!isPaused) {
       IntervalId = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(IntervalId);
  }, [isPaused]);


  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const handleTogglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };


  const minimiseTimer =()=>{
    return(
      <>
        <div className='flex justify-start'>
          <div className="timer2 absolute text-red-600 text-3xl ">{formatTime(timeRemaining)}</div>
          <button className="pause-play-button2" onClick={handleTogglePause}>
            {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
          </button>
        </div>
      </>
    )
  }

  return (
<div className='container'>
  <div className='outerDivForBorderGradient'>
    <div className="countdown-timer ">
      <div className="circle" >
        <div className='chapterName'>Chapter 1</div>
    <div className="your-div-class text-white absolute top-[43%] left-[5%] text-[30px] hover:cursor-pointer" >
      <FontAwesomeIcon icon={faCog}/>
    </div>
        <div className="timer">{formatTime(timeRemaining)}</div>
        <button className="pause-play-button" onClick={handleTogglePause}>
          {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
        </button>
        
      </div>
      <div className='absolute left-[85%] sm:left-[60%] sm:top-[47%] '>
            <img src="./src/assets/Frame 761.png" alt="" className='w-[100px]'/>
        </div>
    </div>
  </div>
     
</div>

  );
};


export default CountdownTimer;