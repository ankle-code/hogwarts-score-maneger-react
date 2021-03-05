import "./App.css";
import Routes from "./routes/routes";
import MenuComponent from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuComponent />
        <Routes />
      </header>
    </div>
  );
}

export default App;
