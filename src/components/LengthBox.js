import React, { Component } from 'react';

class LengthBox extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      breakLength: 5,
      lastSetBreakValue: 5,
      sessionLength: 25,
      lastSetSessionValue: 25
    }

    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
  }

  decrementBreak() {
    if (!this.state.timerRunning) {
      if (this.state.breakLength > 0) {
        this.setState({
          breakLength: this.state.breakLength - 1,
          lastSetBreakValue: this.state.breakLength - 1
        });
      }
    }
  }

  incrementBreak() {
    if (!this.state.timerRunning) {
      this.setState({
        breakLength: this.state.breakLength + 1,
        lastSetBreakValue: this.state.breakLength + 1
      });
    }
  }

  decrementSession() {
    if (!this.state.timerRunning) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        lastSetSessionValue: this.state.sessionLength - 1
      });
    }
  }

  incrementSession() {
    if (!this.state.timerRunning) {
      if (this.state.sessionLength < 60) {
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          lastSetSessionValue: this.state.sessionLength + 1
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="label-container">
          <div id="break-label">
            <p>Break Length</p>
          </div>
          <button 
            id="break-decrement"
            onClick={() => this.decrementBreak()}>
              Down
          </button>
          <div id="break-length">{this.state.breakLength}</div>
          <button 
            id="break-increment"
            onClick={() => this.incrementBreak()} >
              Up
          </button>
        </div>

        <div className="label-container">
          <div id="session-label">
            Session Length
          </div>
          <button 
            id="session-decrement"
            onClick={() => this.decrementSession()} 
          >
            Down
          </button>
          <div id="session-length">{this.state.lastSetSessionValue}</div>
          <button 
            id="session-increment"
            onClick={() => this.incrementSession()} 
          >
            Up
          </button>
        </div>
      </div>
    );
  }
}

export default LengthBox;
