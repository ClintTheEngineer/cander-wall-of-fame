import React, { useState } from 'react';
import { Directory } from '../data/Directory';
import { Player } from './Player';

export const Controls = () => {
  const [activePlayer, setActivePlayer] = useState(null);

  const handlePlayerClick = (firstName) => {
    setActivePlayer((prev) => (prev === firstName ? null : firstName));
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
          <Player player={activePlayer} />
        </main>
        </div>
      )}
      
    
    </>
  );
};
