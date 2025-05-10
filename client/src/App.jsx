import './App.css';
//import { useState } from 'react';
import { Directory } from './data/Directory';
import { Controls } from './components/Controls';
import { PlayerList } from './components/PlayerList';
import { Banner } from './components/Banner';

function App() {
  //const [activePlayerId, setActivePlayerId] = useState(null);

  return (
    <>
      <Controls players={Directory} />
    </>
  );
}

export default App;
