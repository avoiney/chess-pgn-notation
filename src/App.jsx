import { useState } from "react";

import "./App.css";
import PGNTable from "./components/PGNTable";
import PGNText from "./components/PGNText";
import Controls from "./components/Controls";

function App() {
  const [moves, setMoves] = useState([
    { white: "e4", black: "e5" },
    { white: "Nf3", black: "d5" },
    { white: "exd5", black: "Qxd5" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess PGN notation</h1>
      </header>

      <section id="pgnTable">
        <PGNTable moves={moves}></PGNTable>
      </section>

      <section id="PGNText">
        <PGNText moves={moves}></PGNText>
      </section>

      <section id="controls">
        <Controls moves={moves} setMoves={setMoves}></Controls>
      </section>
    </div>
  );
}

export default App;
