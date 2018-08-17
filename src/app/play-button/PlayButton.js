import React, { Component } from "react";

class PlayButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let button;
    switch (this.props.answerIsCorrect) {
      case true:
        button = (
          <button
            className="btn btn-success"
            disabled={!this.props.selectedNumbers.length}
            onClick={this.props.acceptAnswer}
          >
            <i className="fa fa-check" aria-hidden="true" />
          </button>
        );
        break;
      case false:
        button = (
          <button
            className="btn btn-danger"
            disabled={!this.props.selectedNumbers.length}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        );
        break;
      default:
        button = (
          <button
            className="btn btn-default"
            disabled={!this.props.selectedNumbers.length}
            onClick={this.props.checkAnswer}
          >
            =
          </button>
        );
        break;
    }
    return (
      <div className="col-2 text-center">
        {button}
        <div className="form-group" />
        <div className="form-group" />
        <button
          className="btn btn-warning btn-sm"
          disabled={!this.props.redraws}
          onClick={this.props.redraw}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
          &nbsp;
          {this.props.redraws}
        </button>
      </div>
    );
  }
}

export default PlayButton;
