import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/theme.ts";
import { Providers } from "./contexts/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <PrimeReactProvider>
      <Providers>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </Providers>
    </PrimeReactProvider>
  </BrowserRouter>
);
