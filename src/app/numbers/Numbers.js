import React, { Component } from "react";
import * as _ from "lodash";
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
            <span key={index} className="Numbers Numbers-number-circle">
              {number}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Numbers;
