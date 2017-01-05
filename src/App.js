import React, { Component } from 'react';
import './App.css';
import CamperList from './components/camper_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: [],
      pointType: 'Last 30 days' 
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>freeCodeCamp Camper Leaderboard</h2>
        </div>
        <CamperList />
      </div>
    );
  }
}

export default App;
