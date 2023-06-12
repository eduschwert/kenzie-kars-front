import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { HomePage } from "./pages/homePage";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./theme";
import { AnnoucementPage } from "./pages/annoucement";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <HomePage /> */}
        <AnnoucementPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
