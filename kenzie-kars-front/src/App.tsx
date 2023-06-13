import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./theme";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesMain />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
