import logo from './logo.svg';
import './App.css';
import { routes } from './route_path';
import TS from "./ts.tsx"

function App() {
  console.log("routes", routes);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TS></TS>
      </header>
    </div>
  );
}

export default App;
