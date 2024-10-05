import { Bounce, ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes";
import { Header } from "./components/header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="light"
        limit={3}
        style={{ fontSize: "1.5rem", fontWeight: "500" }}
      />
    </>
  );
};

export default App;
