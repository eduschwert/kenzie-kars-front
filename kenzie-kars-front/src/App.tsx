import { CardCar } from "./components/cardCar";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <h1>Olá</h1> */}
      <CardCar />
    </div>
  );
}

export default App;
