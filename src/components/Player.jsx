import { useState, useRef, useEffect } from 'react';

export default function Player() {
	const player = useRef();
	const buttonRef = useRef();
	const [playerName, setPlayerName] = useState('unknown entity');
	
	useEffect(() => {
		buttonRef.current?.focus();
	}, []);


	function handleClick() {
		setPlayerName(player.current.value)
		player.current.value = '';
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	}
	
  return (
    <section id="player">
      <h2>Welcome {playerName} </h2>
      <p>
        <label htmlFor="player-name" style={{ position: 'absolute', left: '-10000px' }}>Player name</label>
        <input id="player-name" type="text" ref={player} aria-label="Player name" onKeyDown={handleKeyDown} />
        <button type="button" ref={buttonRef} onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
