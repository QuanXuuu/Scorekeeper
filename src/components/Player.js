import Button from "./Button";
import styled from "styled-components";

export default function Player({
  name,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <AppPlayer className="Player">
      <AppPlayerName className="Player__name"> {name} </AppPlayerName>
      <ButtonSmall onClick={onDecreaseScore}>-</ButtonSmall>
      {score}
      <ButtonSmall onClick={onIncreaseScore}>+</ButtonSmall>
    </AppPlayer>
  );
}

const AppPlayer = styled.li`
  list-style: none;
  display: flex;
  justify-content: end;
  gap: 14px;
  font-weight: bolder;
`;

const AppPlayerName = styled.span`
  margin-right: auto;
`;

const ButtonSmall = styled.button`
  background-color: #0099cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;
