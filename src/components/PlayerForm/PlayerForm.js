import styled from "styled-components";
import Button from "../Button/Button";

export default function PlayerForm({ onCreatePlayer }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    const newPlayer = { name: name.value, score: 0 };
    onCreatePlayer(newPlayer);
    form.reset();
    name.focus();
  }

  return (
    <AppForm onSubmit={handleSubmit} className="PlayerForm">
      <label htmlFor="name">Add Name:</label>
      <input id="name" type="text" name="name" />
      <Button>Create player</Button>
    </AppForm>
  );
}

const AppForm = styled.form`
  display: grid;
  gap: 12px;
`;
