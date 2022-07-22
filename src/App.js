import "./App.css";
import { useState, useEffect } from "react";
import BasicComponent from "./basicComponent";

function App() {
  const [pokemon, setPokemon] = useState([]);

  let url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemon(json.results));
  }, [url]);

  return (
    <div className="App">
      <header className="App-header">
        <BasicComponent pokemon={pokemon} />
      </header>
    </div>
  );
}

export default App;
