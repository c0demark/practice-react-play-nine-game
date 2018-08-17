import React, { Component } from "react";

class PlayButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-2">
        <button className="btn" disabled={!this.props.selectedNumbers.length}>
          =
        </button>
      </div>
    );
  }
}

export default PlayButton;
