import React from "react";
import axios from "../apis/OpenWeatherMap";
//import axios from "../apis/OpenWeatherMap";

//const key = "56f09b962e8a014f246bffc48f44b792";
//const id = "7299965";
//const day = "2";

//{this.props.locations}

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

  getRecomendation = (key, id, day) => {
    axios
      .get(`?daily=${day}&id=${id}&APPID=${key}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("Yippie");
  };

  render() {
    return (
      <div>
        <div>
          <h1>Weather when you are leaving is:</h1>
          <div>
            {this.getRecomendation(
              this.state.key,
              this.state.id,
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
