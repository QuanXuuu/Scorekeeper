import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  padding: 20px;
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  background-color: seashell;
}
`;

export default GlobalStyle;
