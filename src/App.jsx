import Player from './components/Player.jsx';
import TimerChallanger from './components/TimerChallanger';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
				<TimerChallanger title={'Easy'} targetTime={1} />
				<TimerChallanger title={'Not Easy'} targetTime={5} />
				<TimerChallanger title={'Hard'} targetTime={10} />
				<TimerChallanger title={'Impossible'} targetTime={15} />
			</div>
    </>
  );
}

export default App;
