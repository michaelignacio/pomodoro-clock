import React, { Component } from 'react';
import './App.css';
import LengthBox from './components/LengthBox.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // breakLength: 5,
      breakLength: 1,
      lastSetBreakValue: 1,
      // sessionLength: 25,
      sessionLength: 1,
      lastSetSessionValue: 1,
      seconds: 0,
      timerRunning: false,
      interval: null,
      onBreak: false
      // onSession: false
    };
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  resetTimer() {
    clearInterval(this.state.interval);

    this.setState({
      sessionLength: 25,
      lastSetSessionValue: 25,
      breakLength: 5,
      lastSetBreakValue: 5,
      seconds: 0,
      timerRunning: false
    });
  }

  toggleTimer() {
    let interval;

    this.setState({
      timerRunning: !this.state.timerRunning
    }, () => {
      if (this.state.timerRunning === true) {
        interval = setInterval(() => {
          if (!this.state.onBreak) {
            // on session
            if (this.state.sessionLength === 0 &&
                this.state.seconds === 1) {
              clearInterval(interval);
              this.setState({
                onBreak: true
              });
            }

            if (this.state.seconds === 0) {
              this.setState({
                sessionLength : this.state.sessionLength - 1,
                seconds: 10
              });
            }

            this.setState({
              seconds: this.state.seconds - 1
            });

            if (!this.state.timerRunning) {
              clearInterval(interval);
            }
          } else if (this.state.onBreak) {
            // on break
            if (this.state.breakLength === 0 &&
                this.state.seconds === 1) {
              clearInterval(interval);
              this.setState({
                onBreak: false
              });
            }

            if (this.state.seconds === 0) {
              this.setState({
                breakLength : this.state.breakLength - 1,
                seconds: 60
              });
            }

            this.setState({
              seconds: this.state.seconds - 1
            });

            if (!this.state.timerRunning) {
              clearInterval(interval);
            }
          }
        }, 1000);
      }

      this.setState({
        interval
      });
    });
  }

  render() {
    return (
      <div className="App">
        <LengthBox />

        <div className="session-timer">
          <div id="timer-label">{this.state.onBreak ? 'We are on a break!' : 'We are NOT on a break!'}</div>
          <div id="time-left">
            <p>Session:</p>
            {this.state.sessionLength < 10 ? '0' + this.state.sessionLength : this.state.sessionLength}:{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}
            <br />
            <p>Break:</p>
            {this.state.breakLength < 10 ? '0' + this.state.breakLength : this.state.breakLength}:{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}
          </div>
          <button 
            id="start_stop"
            onClick={() => this.toggleTimer()} 
          >
            Start/Stop
          </button>
          <button 
            id="reset"
            onClick={() => this.resetTimer()} 
          >
            Reset
          </button>

        </div>

      </div>
    );
  }
}

export default App;
