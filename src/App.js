import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

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
            onClick={() => this.handleClick()} 
          >
            Down
          </button>
          <div id="break-length">5</div>
          <button 
            id="break-increment"
            onClick={() => this.handleClick()} 
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
            onClick={() => this.handleClick()} 
          >
            Down
          </button>
          <div id="session-length">25</div>
          <button 
            id="session-increment"
            onClick={() => this.handleClick()} 
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
