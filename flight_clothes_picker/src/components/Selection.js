import React from "react";
import axios from "../apis/OpenWeatherMap";

import StateDropDown from "../helpers/StateDropDown";

class Selection extends React.Component {
  state = {
    key: "56f09b962e8a014f246bffc48f44b792",
    startDate: "",
    startLoc: "",
    endDate: "",
    endLoc: "",
    weather1: "",
    weather2: ""
  };

  getWeather = () => {
    console.log(this.state.endLoc);
    const key = this.state.key;
    const startDate = this.state.startDate;
    const startLoc = this.state.startLoc;
    const endDate = this.state.endDate;
    const endLoc = this.state.endLoc;
    //   const weather1 = this.state.weather1;
    const weather2 = this.state.weather2;
    console.log(`${startDate} and ${startLoc} `);

    if (startDate === "") {
      alert("Fill in start date");
    } else if (startLoc === "") {
      alert("Fill in start location");
    } else if (endDate === "") {
      alert("Fill in end date");
    } else if (endLoc === "") {
      alert("Fill in end location");
    } else {
      this.getRecomendation(key, startDate, startLoc).then(function(response) {
        console.log(`this is the response we get back ${response}`);
      });
    }
  };

  getRecomendation = async (key, day, id, stateId) => {
    const dayR = this.getDay(day);
    console.log(dayR);

    await axios
      .get(`?daily=${day}&q=${id},AU&APPID=${key}`)
      .then(function(response) {
        const sendBack = response.data.message;
        console.log(`before being send back ${sendBack}`);
        return sendBack;
      })
      .catch(function(error) {
        console.log(error);
      });

    //return <div>response.data.message</div>;
  };

  getDay = date => {
    var dateNow = new Date().getDate();
    if (date === "") {
      console.log("Date is empty");
    } else {
      const uDate = date.substring(date.length - 2);
      return uDate - dateNow;
    }
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
              <StateDropDown />
              <button
                type="submit"
                className="ui button"
                onClick={this.getWeather}
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1>Weather when you are Leaving is: {this.state.weather1}</h1>
        </div>
        <div>
          <h1>Weather when you are arriving is: {this.state.weather2}</h1>
        </div>
      </div>
    );
  }
}

export default Selection;
