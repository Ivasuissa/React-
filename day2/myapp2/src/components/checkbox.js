import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  checkCheckbox(event) {
    this.setState({ checked: event });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onClick={event => {
            this.checkCheckbox(event.target.checked);
          }}
        ></input>
        <label> Checkbox</label>
        {this.state.checked && this.props.children}
      </div>
    );
  }
}
export default Checkbox;
