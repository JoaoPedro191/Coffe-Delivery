import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes/Default";
import { useState } from "react";
import { CoffeSelectedsContextProvider } from "./context/coffesSelectedsContext";

function App() {
  const [theme, setTheme] = useState<string>("light");

  const handleToggleButton = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? defaultTheme : darkTheme}>
        <GlobalStyle />
        <CoffeSelectedsContextProvider>
          <Router ToggleButton={handleToggleButton} />
        </CoffeSelectedsContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export { App };
