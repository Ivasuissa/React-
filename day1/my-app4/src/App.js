import React from "react";
import bottomMeteo from "./components/bottomMeteo";
import TopMeteo from "./components/topMeteo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TopMeteo />
        <bottomMeteo />
      </div>
    </div>
  );
}

export default App;
