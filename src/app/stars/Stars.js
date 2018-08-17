import React, { Component } from "react";
import * as _ from "lodash";

import "./Stars.css";

class Stars extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);
    return (
      <div className="col-5">
        {_.range(numberOfStars).map(index => (
          <i
            key={index}
            className="fa fa-star Stars Stars-icon"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }
}

export default Stars;
