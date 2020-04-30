import React from "react";
import Checkbox from "./checkbox";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    // this.state = "";
    this.state = { checked: false };
  }
  componentDidMount() {
    alert("I'm alive");
  }
  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        />
        {/* <h1> Celine Dion song </h1> */}
        <h1> the checkbox is checked</h1>
      </div>
    );
  }
}
export default Alert;
