import { useState } from 'react';
import { Directory } from '../data/Directory';
import { Player } from './Player';
import { audioFiles } from '../components/Audio';

export const Controls = () => {
  const [activePlayer, setActivePlayer] = useState(null);
  const [audio, setAudio] = useState(null);

  const handlePlayerClick = (player) => {
    setActivePlayer((prev) => (prev === player ? null : player));
    setAudio(audioFiles[player.firstName])
  };

  return (
    <>
    <section id="main-container">
      {Directory.map((player) => (
        <div
          key={player.firstName}
          id={player.firstName}
          onClick={() => handlePlayerClick(player)}
          className="sub-container"
        >
          <p className="player-name">{player.playerName}</p>
        </div>
      ))}
</section>
{activePlayer && (
        <div id={activePlayer.id} className='player-name'>
        <main id="playerStuff">
          <Player player={activePlayer} audio={audio} />
        </main>
        </div>
      )}
      
    
    </>
  );
};
