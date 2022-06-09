import styled from "styled-components";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Player from "./components/Player/Player";
import PlayerForm from "./components/PlayerForm/PlayerForm";

import { useEffect, useState } from "react";
import { getFromLocal, setToLocal } from "./lib/localStorage";

export default function App() {
  const [players, setPlayers] = useState(getFromLocal("players") ?? []);
  useEffect(() => setToLocal("players", players), [players]);

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
    <AppContainer className="App">
      <Header />
      <AppPlayers className="Player-list" role="list">
        {players.map((player, index) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onIncreaseScore={() => increaseScore(index)}
            onDecreaseScore={() => decreaseScore(index)}
          />
        ))}
      </AppPlayers>
      <Button onClick={resetAllScores}>Reset scores</Button>
      <Button onClick={resetAllPlayers}>Reset all</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  gap: 20px;
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5%;
  box-shadow: 5px 10px #888888;
  background-color: white;
  padding: 20px;
`;

const AppPlayers = styled.ul`
  display: grid;
  gap: 14px;
  padding: 0;
`;
