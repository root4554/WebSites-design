import logo from "./BurgerKing3.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is me Martin Click on the link below to know more on me </p>
        <a
          className="App-link"
          href="https://burgerking.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Martin web site
        </a>
      </header>
    </div>
  );
}

export default App;
