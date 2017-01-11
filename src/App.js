import React, { Component } from 'react';
import './App.css';
import CamperList from './components/camper_list';

const recentList = ['recent', 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'];
const allTimeList = ['allTime', 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'];

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
    fetch(url[1])
    .then(
      response => response.json()
    )
    .then (
      previousJSON => {
        let camperArr = [];
        previousJSON.map((camper) => {
          camperArr.push(camper)
        })
        this.setState({
          campers: camperArr,
          pointType: url[0]
        })
        console.log(this.state);
      }
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
