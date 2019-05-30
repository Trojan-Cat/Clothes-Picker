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
            Find out what to wear for the next few days
          </h1>
        </div>
        <Selection />
      </div>
    );
  }
}

export default App;
