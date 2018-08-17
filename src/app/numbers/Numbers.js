import React, { Component } from "react";
import * as _ from "lodash";
import classNames from "classnames";

import "./Numbers.css";

class Numbers extends Component {
  arrayOfNumbers = _.range(1, 10);
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card text-center">
        <div>
          {this.arrayOfNumbers.map((number, index) => (
            <span
              key={index}
              className={this.setClasses(number)}
              onClick={() => {
                this.props.selectNumber(number);
              }}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
    );
  }
  setClasses(number) {
    return `Numbers Numbers-number-circle${
      this.props.selectedNumbers.indexOf(number) >= 0 ? " selected" : ""
    }`;
  }
}

export default Numbers;
