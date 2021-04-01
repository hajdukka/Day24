import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="button" value="Set" onClick={this.setMyStorage} />
        <input type="button" value="Get" onClick={this.getMyStorage} />
      </div>
    );
  }
  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  }
  getMyStorage() {
    var myCookieData;
    myCookieData = ("; "+document.cookie).split("; Year=").pop().split(";").shift();
    var myLocalStorageData;
    myLocalStorageData = localStorage.getItem("Paragon");
    var mySessionStorageData;
    mySessionStorageData = sessionStorage.getItem("frontend");
    
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  }
  
}

export default App;
