import { useState, useRef } from 'react';

function TimerChallanger ({title, targetTime}) {
	const [gameStarted, setGameStarted] = useState(false)
	const [timerExpired, setTimerExpired] = useState(false)
	const timer = useRef(null);
	
	function handleStart(targetTime) {
		setTimeout(() => {
			setTimerExpired(true)
			console.log('now is: ' + targetTime)
		}, targetTime * 1000);
	}
	
	function handleClick() {
		setGameStarted(!gameStarted);
		handleStart(targetTime);
	}
	
	return (
    <div className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>use lost</p> }
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleClick}>
          {!gameStarted ? 'Start Challenge' : 'Stop Challenge'}
        </button>
      </p>
      <p className={gameStarted ? 'active' : ''}>
        {!gameStarted ? 'Timer innactive' : 'Timer is running'}
      </p>
    </div>
  );
}

export default TimerChallanger;