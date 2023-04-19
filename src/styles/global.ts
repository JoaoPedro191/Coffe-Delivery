import { createGlobalStyle } from "styled-components";
import backgroundImagem from "../assets/Background.svg";

interface GlobalStyleProps {
  theme: {
    Body: string;
  };
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: ${(props) => props.theme.Body};
  /* background-color:  rgb(26, 28, 28); */

  /* background-color: lightgray ; */
  -webkit-font-smoothing: antialiased;
  /* background-image: url(${backgroundImagem});
  background-repeat: no-repeat;
  background-position-x:  50%; */
  /* background-position-y: center;  */
  /* background-size: cover; */
 }
`;
