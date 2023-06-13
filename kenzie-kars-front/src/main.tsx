import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./contexts/Providers.tsx";
import { UserProvider } from "./contexts/userContext/UserContext.tsx";
import { CitiesProvider } from "./contexts/CitiesContext/CitiesContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CitiesProvider>
          <App />
        </CitiesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
