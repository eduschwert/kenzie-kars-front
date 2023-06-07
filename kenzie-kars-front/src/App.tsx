import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
