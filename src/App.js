import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';

let defaultStyle = {
  color: defaultTextColor,
}

class Aggregate extends Component {
  render() {
    let noOfPlaylist = "25";
    let firstPlay = "Believer"
    return (
      <div className="aggregate" style={{...defaultStyle,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
        <h4 className="playlist" style={{padding: '20px 10px'}}>{noOfPlaylist} Playlist</h4>
        <h4 className="playName" style={{padding: '20px 10px'}}>{firstPlay}</h4>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input style={{padding: '8px 15px',borderRadius: '15px'}} type="text" id="filter"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultTextColor,width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
          <li>Song 5</li>
          <li>Song 6</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let headerColor = {backgroundColor: "#2dccef",color: "#607d8b",padding: "20px",borderRadius: "5px"};
    return (
      <div className="App" style={{backgroundColor: '#3d3d3d'}}>
        <header className="App-header">
          <h1 style={headerColor} className="App-title">Title</h1>
        </header>
        <Aggregate/>
        <Filter/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
