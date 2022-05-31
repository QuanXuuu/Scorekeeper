import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";
import Heading from "./Heading.js";

function App() {
  return (
    <div className="App">
      <h1 className="Heading">Scorekeeper Version A</h1>
      <ul role="list">
        <Player name="John Doe" score={20} />
        <Player name="Jane Doe" score={30} />
      </ul>
      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;
