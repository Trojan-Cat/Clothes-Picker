import React from "react";
import Weather from "./Weather";

class Selection extends React.Component {
  state = {
    startDate: "",
    startLoc: "",
    endDate: "",
    endLoc: ""
  };

  //TODO: Change this to highlight the filed that needs to  be filled in rather than alerts
  onGo = event => {
    // this.setState({ startDate: document.getElementById("firstDate").value });
    // this.setState({ startLoc: document.getElementById("firstLoc").value });
  };

  render() {
    return (
      <div>
        <div className="ui menu">
          <div className="item">
            <div className="ui icon input icon">
              <input
                type="date"
                id="firstDate"
                value={this.state.startDate}
                onChange={e => this.setState({ startDate: e.target.value })}
              />
              <input
                type="text"
                placeholder="Leaving from..."
                id="firstLoc"
                value={this.state.startLoc}
                onChange={e => this.setState({ startLoc: e.target.value })}
              />
              <i aria-hidden="true" className="search icon" />
            </div>
          </div>
          <div className="right item">
            <div className="ui action input">
              <input
                type="date"
                id="arriveDate"
                value={this.state.endDate}
                onChange={e => this.setState({ endDate: e.target.value })}
              />
              <input
                type="text"
                placeholder="Arriving at..."
                value={this.state.endLoc}
                onChange={e => this.setState({ endLoc: e.target.value })}
              />
              <button type="submit" className="ui button" onClick={this.onGo}>
                Go
              </button>
            </div>
          </div>
        </div>
        <div>
          <Weather selections={this.state} />
        </div>
      </div>
    );
  }
}

export default Selection;
