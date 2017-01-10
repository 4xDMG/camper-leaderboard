import React, { Component } from 'react';
import './App.css';
import CamperList from './components/camper_list';

const recentList = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
/*const alltimeList = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const fccInit = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
};*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: [],
      pointType: '',
    }

    this.getData(recentList);
  }

  request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};

  getData = (url) => {
    this.request(url)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  /*getData(url, fccInit) {
    fetch(url, fccInit)
    .then(
      response => response.json()
    )
    .then (
      previousJSON => console.log(previousJSON.name)
    )
    .catch(
      error => console.log(error.message)
    );
  }*/
  
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
