import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>app</div>
      </ThemeProvider>
    </>
  );
}

export default App;
