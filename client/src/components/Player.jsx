export const Player = ({ player }) => {
  return (
        <article>
          <table>
            <caption>
              <h3>{player.playerName}</h3>
            </caption>
            <thead>
              <tr>
                <th>Stat Type</th>
                <th>Number</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PER</td>
                <td>{player.perNumber}</td>
                <td>{player.perRank}</td>
              </tr>
              <tr>
                <td>Offensive Rating</td>
                <td>{player.offensiveRating}</td>
                <td>{player.offensiveRatingRank}</td>
              </tr>
              <tr>
                <td>Defensive Rating</td>
                <td>{player.defensiveRating}</td>
                <td>{player.defensiveRatingRank}</td>
              </tr>
              <tr>
                <td>Value Over Replacement Player</td>
                <td>{player.valueOverReplacementPlayer}</td>
                <td>{player.valueOverReplacementPlayerRank}</td>
              </tr>
            </tbody>
          </table>
        </article>
  );
};

