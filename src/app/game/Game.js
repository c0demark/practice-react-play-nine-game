import React, { Component } from "react";
import Stars from "../stars/Stars";
import Answer from "./../answer/Answer";
import PlayButton from "../play-button/PlayButton";
import Numbers from "../numbers/Numbers";

class Game extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <h3>Play Now</h3>
        <hr />
        <div className="row">
          <Stars />
          <PlayButton />
          <Answer />
        </div>
        <div className="form-group" />
        <Numbers />
      </div>
    );
  }
}

export default Game;
