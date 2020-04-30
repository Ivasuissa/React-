import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span> Username: {this.props.name} </span>
        <span> Country: {this.props.country} </span>
        <span> Email: {this.props.email} </span>
        <br />
        <br />
      </div>
    );
  }
}
export default List;
