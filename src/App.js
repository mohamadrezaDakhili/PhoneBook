import React from "react";
import "./App.css";
import PhoneBookContainer from "./component/container/PhoneBookContainer.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PhoneBookContainer />
      </div>
    );
  }
}

export default App;
