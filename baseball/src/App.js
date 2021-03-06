import React, { Component } from 'react';
import './App.css';

import Display from "./components/display/Display.js";
import Dashboard from "./components/dashboard/Dashboard.js";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
  }

  addStrike = () => {
    let strikes = this.state.strikes + 1;
    if (strikes > 2) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    } else {
      this.setState({
        strikes: strikes
      })
    }

  };

  addBall = () => {
    let balls = this.state.balls + 1;
    if (balls > 3) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    } else {
      this.setState({
        balls: balls
      })
    }
  };

  Foul = () => {
    if (this.state.strikes < 2 ) {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
    
  };

  Hit = () => {
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0,
    })
  };

  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <Dashboard {...this.state} 
        addBall={this.addBall} 
        addStrike={this.addStrike}
        hit={this.Hit}
        foul={this.Foul}

        />
      </div>
    );
  }
}

export default App;