import "./PlayerForm.css";

export default function PlayerForm() {
  return (
    <form className="PlayerForm">
      <label htmlFor="add-player">Add player: </label>
      <input className="add__player" id="add-player" type="text" />
    </form>
  );
}
