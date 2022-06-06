import "./App.css";
import { useState } from "react";
import Button from "./components/Button.js";
import Player from "./components/Player.js";
import PlayerForm from "./components/PlayerForm.js";
import Heading from "./components/Heading.js";

export default function App() {
  const [players, setPlayers] = useState([]);

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  function increaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 10 },
      ...players.slice(index + 1),
    ]);
  }

  function decreaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 10 },
      ...players.slice(index + 1),
    ]);
  }

  function resetAllScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
  }

  return (
    <div className="App">
      <Heading />
      <ul className="Player-list" role="list">
        {players.map((player, index) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onIncreaseScore={() => increaseScore(index)}
            onDecreaseScore={() => decreaseScore(index)}
          />
        ))}
      </ul>
      <Button onClick={resetAllScores}>Reset scores</Button>
      <Button onClick={resetAllPlayers}>Reset all</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}
