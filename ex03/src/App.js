import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="button" value="Set" onClick={this.setLocalStorage} />
      </div>
    );
  }
  setLocalStorage() {
    localStorage.setItem("Arena", "Selection Month");
  }
  
}

export default App;
