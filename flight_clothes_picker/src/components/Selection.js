import React from "react";
import axios from "../apis/OpenWeatherMap";
import ClothesRec from "./ClothesRec";

class Selection extends React.Component {
  state = {
    key: "56f09b962e8a014f246bffc48f44b792",
    days: "1",
    startLoc: "Melbourne",
    weather1: []
  };

  getWeatherCheck = () => {
    const days = this.state.days;
    const startLoc = this.state.startLoc;

    if (days === "") {
      alert("Fill in start date");
    } else if (startLoc === "") {
      alert("Fill in start location");
    } else {
      this.getWeather(days, startLoc);
    }
  };

  getWeather = async (day, id) => {
    const key = this.state.key;

    await axios
      .get(`?q=${id},AU&cnt=${day}&units=metric&APPID=${key}`)
      .then(weather => this.setState({ weather1: weather.data.list }))
      .catch(function(error) {
        console.log(error);
      });

    console.log(this.state.weather1);
  };

  getClothesRecomendation = () => {
    if (this.state.weather1[0] === undefined) {
      return <div>Enter some dates to find out what is best to wear</div>;
    } else {
      return (
        <div role="list" className="ui divided relaxed list">
          <ClothesRec data={this.state.weather1} />
        </div>
      );
    }
  };

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
              onClick={this.getWeatherCheck}
            >
              Go
            </button>
          </div>
        </div>
        <div>{this.getClothesRecomendation()}</div>
      </div>
    );
  }
}

export default Selection;
