import React from "react";

class Selection extends React.Component {
  state = {
    startDate: "",
    startLoc: "",
    endDate: "",
    endLoc: ""
  };

  //TODO: Change this to highlight the filed that needs to  be filled in rather than alerts
  onGo = event => {
    const startDate = this.state.startDate;
    const startLoc = this.state.startLoc;
    const endDate = this.state.endDate;
    const endLoc = this.state.endLoc;

    if (startDate === "") {
      alert("Select a start date");
    } else if (startLoc === "") {
      alert("Select a start location");
    } else if (endDate === "") {
      alert("Select a start date");
    } else if (endLoc === "") {
      alert("Select a end location");
    }
  };

  render() {
    return (
      <div className="ui menu">
        <div className="item">
          <div className="ui icon input icon">
            <input
              type="date"
              value={this.state.startDate}
              onChange={e => this.setState({ startDate: e.target.value })}
            />
            <input
              type="text"
              placeholder="Leaving from..."
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
    );
  }
}

export default Selection;
