import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
        <p>app</p>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
