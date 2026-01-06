import { useState, useRef, useEffect } from 'react';
import ResultModal from './ResultModal';

function TimerChallenger ({title, targetTime}) {
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
	const timer = useRef();
	const dialog = useRef();

	useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      dialog.current.open();
    }
  }, [timeRemaining]);
	

	function startTimer() {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }


	function handleReset() {
		setTimeRemaining(targetTime * 1000);
	}

	function stopTimer() {
    clearInterval(timer.current);
    dialog.current.open(); // <-- open modal immediately
  }

	return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={!timerIsActive ? startTimer : stopTimer}>
            {!timerIsActive ? 'Start Challenge' : 'Stop Challenge'}
          </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
          {!timerIsActive ? 'Timer inactive' : 'Timer is running'}
        </p>
      </div>
    </>
  );
}

export default TimerChallenger;