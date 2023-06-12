import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { HomePage } from "./pages/homePage";
import { theme } from "./theme";
import { AnnoucementPage } from "./pages/annoucement";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AnnoucementPage />
      {/* <ThemeProvider theme={theme}><HomePage /></ThemeProvider> */}
    </div>
  );
}

export default App;
