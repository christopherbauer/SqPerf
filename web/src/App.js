import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class QueryTileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tiles: props.tiles,
    };
  }

  renderTile(i) {
    return <QueryTile value={this.state.tiles[i]} />;
  }

  render() {
    return (
      <div className="query-tile-container">
        {this.renderTile(0)}
        {this.renderTile(1)}
        {this.renderTile(2)}
        {this.renderTile(3)}
        {this.renderTile(4)}
      </div>
    );
  }
}
class QueryTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.value && props.value.name,
      averageDuration: props.value && props.value.averageDuration,
      monthPreviousAverageDuration: props.value && props.value.monthPreviousAverageDuration
    };
  }
  performance() {
    if(this.state.averageDuration > this.state.monthPreviousAverageDuration) {
      return -1;
    }
    else if(this.state.averageDuration < this.state.monthPreviousAverageDuration) {
      return 1;
    }
    else {
      return 0;
    }
  }
  performanceClass() {
    var queryPerformance = this.performance();
    switch(queryPerformance) {
      case 1:
        return "improved";
      case -1:
        return "deteriorate"
      default:
        return "";
    }
  }
  render() {
    var tileClass = "query-tile";
    if(this.performanceClass() != "") {
      tileClass += " " + this.performanceClass();
    }
    return (
      <div className={tileClass}>
        <p>{this.state.name}</p>
        <p>{this.state.averageDuration}</p>
        <p>{this.state.monthPreviousAverageDuration}</p>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SqPerf</h1>
        </header>
        <div className="App-intro">
          <fieldset>
            <legend>Top 5 Worst Performing Queries</legend>
            <QueryTileList tiles={[{ name: "dbo.RequestSystemStoredProcedureChecksums", averageDuration: 1, monthPreviousAverageDuration: .5 }, { name: "dbo.RequestSystemStoredProcedures", averageDuration: 1, monthPreviousAverageDuration: 2.5 }]} />
          </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
