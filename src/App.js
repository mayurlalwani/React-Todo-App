import React, { Component } from "react";
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ task: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      task: "",
      items: [...this.state.items, this.state.task]
    });
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.task} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
