import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="button" value="Set" onClick={this.setLocalStorage} />
        <input type="button" value="Get" onClick={this.getLocalStorage} />
      </div>
    );
  }
  setLocalStorage() {
    localStorage.setItem("Arena", "Selection Month");
  }

  getLocalStorage() {
    var myLocalStorageData;
    myLocalStorageData = localStorage.getItem("Arena");
  }
}

export default App;
