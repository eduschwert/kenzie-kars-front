import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext/UserContext.tsx";
import { CitiesProvider } from "./contexts/citiesContext/CitiesContext.tsx";

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
