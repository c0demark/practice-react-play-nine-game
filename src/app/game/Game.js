import React, { Component } from "react";
import * as _ from "lodash";

import Stars from "../stars/Stars";
import Answer from "./../answer/Answer";
import PlayButton from "../play-button/PlayButton";
import Numbers from "../numbers/Numbers";
import DoneFrame from "../done-frame/DoneFrame";

class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null
  });
  constructor(props) {
    super(props);
    this.state = Game.initialState();
  }
  render() {
    const {
      selectedNumbers,
      randomNumberOfStars,
      usedNumbers,
      answerIsCorrect,
      redraws,
      doneStatus
    } = this.state;
    return (
      <div className="container-fluid">
        <h3>Play Now</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <PlayButton
            selectedNumbers={selectedNumbers}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            redraws={redraws}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>
        <div className="form-group" />
        {doneStatus ? (
          <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} />
        ) : (
          <Numbers
            selectedNumbers={selectedNumbers}
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers}
          />
        )}
      </div>
    );
  }
  selectNumber = clickedNumber => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
      answerIsCorrect: null
    }));
  };
  unselectNumber = clickedNumber => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(
        number => number !== clickedNumber
      ),
      answerIsCorrect: null
    }));
  };
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect:
        prevState.randomNumberOfStars ===
        prevState.selectedNumbers.reduce((sum, number) => sum + number, 0)
    }));
  };
  acceptAnswer = () => {
    this.setState(
      prevState => ({
        selectedNumbers: [],
        randomNumberOfStars: Game.randomNumber(),
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        answerIsCorrect: null
      }),
      this.updateDoneStatus
    );
  };
  redraw = () => {
    if (this.state.redraws === 0) {
      return;
    }
    this.setState(
      prevState => ({
        randomNumberOfStars: Game.randomNumber(),
        selectedNumbers: [],
        answerIsCorrect: null,
        redraws: prevState.redraws - 1
      }),
      this.updateDoneStatus
    );
  };
  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: "Done. Nice!" };
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: "Game Over!" };
      }
    });
    console.log(this.state.doneStatus);
  };
  possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(number => {
      return usedNumbers.indexOf(number) === -1;
    });
    return this.possibleCombinationForSum(possibleNumbers, randomNumberOfStars);
  };
  possibleCombinationForSum = (possibleNumbers, randomNumberOfStars) => {
    if (possibleNumbers.indexOf(randomNumberOfStars) >= 0) {
      return true;
    }
    if (possibleNumbers[0] > randomNumberOfStars) {
      return false;
    }
    if (possibleNumbers[possibleNumbers.length - 1] > randomNumberOfStars) {
      possibleNumbers.pop();
      return this.possibleCombinationForSum(
        possibleNumbers,
        randomNumberOfStars
      );
    }
    var listSize = possibleNumbers.length,
      combinationsCount = 1 << listSize;
    for (var i = 1; i < combinationsCount; i++) {
      var combinationSum = 0;
      for (var j = 0; j < listSize; j++) {
        if (i & (1 << j)) {
          combinationSum += possibleNumbers[j];
        }
      }
      if (randomNumberOfStars === combinationSum) {
        return true;
      }
    }
    return false;
  };
  resetGame = () => {
    this.setState(Game.initialState());
  };
}

export default Game;
