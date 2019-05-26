import React from "react";

import Selection from "./Selection";
//import Weather from "./Weather";

class App extends React.Component {
  state = { location: "sadasd" };

  render() {
    return (
      <div className="ui container">
        <div>
          <h1 className="ui  center aligned header">
            Select your flight details
          </h1>
        </div>
        <Selection />
      </div>
    );
  }
}

export default App;
