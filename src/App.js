import './styles/app.scss';

import Song from './components/Song';
import Player from './components/Player';
import data from './util';

function App() {
  return (
    <div className='App'>
      <Song />
      <Player />
    </div>
  );
}

export default App;
