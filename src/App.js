import React, { Component } from 'react';
import './App.css';
import CamperList from './components/camper_list';

const recentList = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const alltimeList = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: [],
      pointType: '',
    }

    this.onPointTypeChange('recent');
  }

  onPointTypeChange(pointType) {
      if (pointType === 'recent') {
        this.setState({
          campers: [recentList],
          pointType: 'recent'
        });
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
