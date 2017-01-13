import React, { Component } from 'react';
import './App.css';
import CamperList from './components/camper_list';
import PointTypeSelector from './components/point_type_selector';

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
        previousJSON.map((camper, count) => {
          camperArr.push(camper)
        })
        this.setState({
          campers: camperArr,
          pointType: url[0]
        })
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
        <div className="camper-list">
          <table>
            <PointTypeSelector />
            <CamperList camperList={this.state.campers} />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
