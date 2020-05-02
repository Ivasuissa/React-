import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      listMessages: []
    };
  }

  onChange = event => {
    this.setState({ message: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      message: "",
      listMessages: [...this.state.listMessages, this.state.message]
    });
  };

  render() {
    return (
      <div className="container">
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.message} onChange={this.onChange} />
          <button>Send</button>
        </form>
        <Form listMessages={this.state.listMessages} />
      </div>
    );
  }
}
