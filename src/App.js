import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 100,
      percent: 1
    };
  }

  startChanged = (e) => {
    this.setState({start: e.target.value});
  }
  percentChanged = (e) => {
    this.setState({percent: e.target.value});
  }

  render() {
    const percent = this.state.percent * 0.01 + 1;
    const payment = this.state.start * Math.pow(percent, 12)/(Math.pow(percent, 9) + Math.pow(percent, 6) + Math.pow(percent, 3) + 1);
    return (
      <div className="App" style={{marginTop: '50px'}}>
        <span>Starting balance: </span><input type='number' value={this.state.start} onChange={this.startChanged}></input>
        <br/>
        <span>Percent interest: </span><input type='number' value={this.state.percent} onChange={this.percentChanged}></input>
        <br/>
        <span>{'Quarterly payment: ' + payment}</span>
      </div>
    );
  }
}

export default App;
