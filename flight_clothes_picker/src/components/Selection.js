import React from "react";
import axios from "../apis/OpenWeatherMap";

//import StateDropDown from "../helpers/StateDropDown";

class Selection extends React.Component {
  state = {
    key: "56f09b962e8a014f246bffc48f44b792",
    days: "",
    startLoc: "",
    weather1: []
  };

  getWeather = () => {
    const days = this.state.days;
    const startLoc = this.state.startLoc;
    //const endDate = this.state.endDate;
    //const endLoc = this.state.endLoc;

    if (days === "") {
      alert("Fill in start date");
    } else if (startLoc === "") {
      alert("Fill in start location");
    } else {
      this.getRecomendation(days, startLoc);
      // this.getRecomendation(endDate, endLoc, weather2);
    }
  };

  getRecomendation = async (day, id) => {
    // const key = this.state.key;
    // const dayR = this.getDay(day);
    const key = this.state.key;

    await axios
      .get(`?q=${id},AU&cnt=${day}&units=metric&APPID=${key}`)
      .then(weather => this.setState({ weather1: weather.data.list }))
      .catch(function(error) {
        console.log(error);
      });

    console.log(this.state.weather1);
  };

  /* Created for using a date but not needed with the forcast api call
  getDay = date => {
    var dateNow = new Date().getDate();
    if (date === "") {
      console.log("Date is empty");
    } else {
      const uDate = date.substring(date.length - 2);
      return uDate - dateNow;
    }
  };
*/

  render() {
    return (
      <div>
        <div className="ui menu">
          <div className="item">
            <div className="ui icon input icon">
              <input
                type="number"
                id="firstDate"
                value={this.state.days}
                onChange={e => this.setState({ days: e.target.value })}
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
            <button
              type="submit"
              className="ui button"
              onClick={this.getWeather}
            >
              Go
            </button>
          </div>
        </div>
        <div>
          <h1>Weather: {this.state.weather}</h1>
        </div>
      </div>
    );
  }
}

export default Selection;
