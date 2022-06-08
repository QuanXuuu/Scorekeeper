import styled from "styled-components";

function Button({ onClick, children }) {
  return (
    <ButtonLarge onClick={onClick} className="Button">
      {children}
    </ButtonLarge>
  );
}

const ButtonLarge = styled.button`
  padding: 10px;
  background-color: #0099cc;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

export default Button;
