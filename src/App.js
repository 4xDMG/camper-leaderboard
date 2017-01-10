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

    this.getData(recentList);
  }

  getData(url) {
    fetch(url)
    .then(
      response => response.json()
    )
    .then (
      previousJSON => console.log(previousJSON.name)
    )
    .catch(
      error => console.log(error.message)
    );
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
