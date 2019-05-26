import React from "react";
import axios from "../apis/OpenWeatherMap";

//{this.props.selections}
//q={city name},{country code}

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recomended: "",
      key: "56f09b962e8a014f246bffc48f44b792",
      id: "7299965",
      day: "2"
    };
  }

  getRecomendation2 = (key, id, day) => {
    axios
      .get(`?daily=${day}&q=${id},AU&APPID=${key}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("Yippie");
  };

  getRecomendation = (key, id, day) => {
    axios
      .get(`?daily=${day}&id=${id}&APPID=${key}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("Yas " + this.props.selections.startLoc);

    console.log("Yippie");
  };

  render() {
    return (
      <div>
        <div>
          <h1>Weather when you are leaving is:</h1>
          <div>
            {this.getRecomendation2(
              this.state.key,
              "Melbourne",
              this.state.day
            )}
          </div>
        </div>
        <div>
          <h1>Weather when you are arriving is:</h1>
          <div>
            {this.getRecomendation(
              this.state.key,
              this.state.id,
              this.state.day
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
