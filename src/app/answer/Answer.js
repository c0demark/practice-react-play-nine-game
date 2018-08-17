import React, { Component } from "react";

class Answer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-5">
        {this.props.selectedNumbers.map((number, index) => (
          <span
            key={index}
            className="Numbers Numbers-number-circle"
            onClick={() => {
              this.props.unselectNumber(number);
            }}
          >
            {number}
          </span>
        ))}
      </div>
    );
  }
}

export default Answer;
