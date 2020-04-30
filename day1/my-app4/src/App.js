import React from "react";
import Meteo from "./components/bottomMeteo";
import TopMeteo from "./components/topMeteo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TopMeteo />
        <Meteo />
      </div>
    </div>
  );
}

export default App;
