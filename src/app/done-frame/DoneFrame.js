import React, { Component } from "react";

class DoneFrame extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-center">
        <h2>{this.props.doneStatus}</h2>
        <button className="btn btn-secondary" onClick={this.props.resetGame}>
          Play Again
        </button>
      </div>
    );
  }
}

export default DoneFrame;
