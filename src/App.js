import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25
    };
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
  }

  decrementBreak() {
    if (this.state.breakLength > 0) {
      this.setState({
        breakLength: this.state.breakLength - 1
      }
      /*, () => {
        console.log(this.state.breakLength);
      }*/
      );
    }
  }

  incrementBreak() {
    this.setState({
      breakLength: this.state.breakLength + 1
    });
  }

  decrementSession() {
    this.setState({
      sessionLength: this.state.sessionLength - 1
    });
  }

  incrementSession() {
    this.setState({
      sessionLength: this.state.sessionLength + 1
    });
  }

  render() {
    return (
      <div className="App">
        <div className="label-container">
          <div id="break-label">
            <p>Break Length</p>
          </div>
          <button 
            id="break-decrement"
            onClick={() => this.decrementBreak()} 
          >
            Down
          </button>
          <div id="break-length">5</div>
          <button 
            id="break-increment"
            onClick={() => this.incrementBreak()} 
          >
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
          <div id="session-length">25</div>
          <button 
            id="session-increment"
            onClick={() => this.incrementSession()} 
          >
            Up
          </button>
        </div>

        <div className="session-timer">
          <div id="timer-label">Session</div>
          <div id="time-left">

          </div>
          <button 
            id="start_stop"
            onClick={() => this.handleClick()} 
          >
            Start/Stop
          </button>
          <button 
            id="reset"
            onClick={() => this.handleClick()} 
          >
            Reset
          </button>

        </div>

      </div>
    );
  }
}

export default App;
