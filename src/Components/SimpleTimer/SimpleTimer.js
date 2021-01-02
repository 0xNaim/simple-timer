import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Minus from "@material-ui/icons/Remove";
import React, { Component } from "react";
import "./SimpleTimer.css";

class SimpleTimer extends Component {
  state = {
    count: 0,
  };

  intervalId = null;

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  render() {
    return (
      <div className="simple-timer">
        <h2>Simple Timer</h2>
        <Button
          className="btn"
          onClick={this.decreaseCount}
          variant="outlined"
          color="primary"
        >
          <Minus />
        </Button>

        <span className="count">{this.state.count}</span>

        <Button
          className="btn"
          onClick={this.increaseCount}
          variant="outlined"
          color="primary"
        >
          <AddIcon />
        </Button>

        <div className="btn-wrapper">
          <Button
            onClick={this.startTimer}
            className="btn"
            variant="outlined"
            color="default"
          >
            Start
          </Button>

          <Button
            onClick={this.stopTimer}
            className="btn"
            variant="outlined"
            color="default"
          >
            Stop
          </Button>

          <Button
            onClick={this.resetTimer}
            className="btn"
            variant="outlined"
            color="default"
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

export default SimpleTimer;
