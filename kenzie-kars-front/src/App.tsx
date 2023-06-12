import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./theme";
import { AnnoucementPage } from "./pages/annoucement";
import { RoutesMain } from "./routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesMain />
        <AnnoucementPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
