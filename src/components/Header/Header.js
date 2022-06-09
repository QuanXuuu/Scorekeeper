import styled from "styled-components";

function Header() {
  return <AppHeader>Scorekeeper Version A</AppHeader>;
}

const AppHeader = styled.h1`
  font-weight: 2.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  margin: auto;
`;

export default Header;
