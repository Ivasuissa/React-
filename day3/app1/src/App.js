import React from "react";
import GetProduct from "./components/getProduct";
import DeleteProduct from "./components/deleProduct";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <GetProduct />
        {/* <DeleteProduct /> */}
      </div>
    );
  }
}

export default App;
