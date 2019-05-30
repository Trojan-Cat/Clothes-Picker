import React from "react";
import axios from "../apis/OpenWeatherMap";

//import StateDropDown from "../helpers/StateDropDown";

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
    const startDate = this.state.startDate;
    const startLoc = this.state.startLoc;
    const endDate = this.state.endDate;
    const endLoc = this.state.endLoc;

    const weather1 = 1;
    const weather2 = 2;

    if (startDate === "") {
      alert("Fill in start date");
    } else if (startLoc === "") {
      alert("Fill in start location");
    } else if (endDate === "") {
      alert("Fill in end date");
    } else if (endLoc === "") {
      alert("Fill in end location");
    } else {
      this.getRecomendation(startDate, startLoc, weather1);
      this.getRecomendation(endDate, endLoc, weather2);
    }
  };

  getRecomendation = async (day, id, weather) => {
    const key = this.state.key;
    const dayR = this.getDay(day);

    await axios
      .get(`?daily=${dayR}&q=${id},AU&APPID=${key}`)
      .then(response => {
        if (weather === 1) {
          this.setState({ weather1: response.data.message });
        } else {
          this.setState({ weather2: response.data.message });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
