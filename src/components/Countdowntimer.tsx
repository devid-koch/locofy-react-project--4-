

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
  const [isClick, setIsClick] = useState(true);

  useEffect(() => {
    let IntervalId: any;

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


  const minimiseTimer = () => {
    return (
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
            <div className="your-div-class text-white absolute top-[43%] left-[5%] text-[30px] hover:cursor-pointer" >
              {isClick ?
                <FontAwesomeIcon onClick={() => setIsClick(false)} icon={faCog} />
                :
                <div onClick={() => setIsClick(true)}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M1 21L11 11L21 21M21 1L10.9981 11L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              }

            </div>
            {isClick ?

              <div>
                <div className='chapterName'>Chapter 1</div>
                <div className="timer">{formatTime(timeRemaining)}</div>
                <button className="pause-play-button" onClick={handleTogglePause}>
                  {isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                </button>
              </div>
              :
              <div className="mt-10 ml-14">
                <div className="flex flex-col">
                  <div className="flex grow basis-[0%] flex-col items-stretch pb-3">
                    <div className="text-white text-[16px] font-bold whitespace-nowrap">
                      Focus time
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <input className="text-white text-6xl placeholder-white bg-transparent outline-none font-bold whitespace-nowrap justify-center items-stretch h-10 w-24 rounded-xl border-2 border-solid border-sky-400" placeholder='00hr' />
                    <input className="text-white text-6xl placeholder-white bg-transparent outline-none font-bold whitespace-nowrap justify-center items-stretch h-10 w-24 rounded-xl border-2 border-solid border-sky-400" placeholder='00min' />
                  </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch pt-2">
                  <div className="text-white text-[16px] font-bold whitespace-nowrap pb-2">
                    Break time
                  </div>
                  <input className="text-white text-6xl placeholder-white bg-transparent outline-none font-semibold whitespace-nowrap justify-center items-stretch h-10 w-24 rounded-xl border-2 border-solid border-sky-400" placeholder='00min' />
                </div>
                <button className="text-white bg-transparent cursor-pointer ml-7 text-base font-medium whitespace-nowrap justify-center items-stretch border border-[color:var(--button-color,#0148B7)] self-center px-14 py-2.5 rounded-2xl border-solid">
                  Start
                </button>
              </div>
            }



          </div>
          <div className='absolute left-[85%] sm:left-[60%] sm:top-[47%] '>
            <img src="./src/assets/Frame 761.png" alt="" className='w-[100px]' />
          </div>
        </div>
      </div>
    </div >

  );
};


export default CountdownTimer;