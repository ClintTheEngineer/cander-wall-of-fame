import { Player } from './Player';

export const PlayerList = ({ players, activePlayerId }) => {
  return (
    <>
      {players.map(
        (player) =>
          activePlayerId === player.id && <Player key={player.id} player={player} id={player.firstName} />
      )}
    </>
  );
};
