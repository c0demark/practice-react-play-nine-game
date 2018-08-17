import React, { Component } from "react";
import Stars from "../stars/Stars";
import Answer from "./../answer/Answer";
import PlayButton from "../play-button/PlayButton";
import Numbers from "../numbers/Numbers";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    };
  }
  render() {
    const { selectedNumbers, randomNumberOfStars } = this.state;
    return (
      <div className="container-fluid">
        <h3>Play Now</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <PlayButton selectedNumbers={selectedNumbers} />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>
        <div className="form-group" />
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
        />
      </div>
    );
  }
  selectNumber = clickedNumber => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = clickedNumber => {
    console.log(clickedNumber);
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(
        number => number !== clickedNumber
      )
    }));
  };
}

export default Game;
