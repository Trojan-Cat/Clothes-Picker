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
      day: "2",
      weather1: "",
      weather2: ""
    };
  }

  getDay = date => {
    console.log(this.props.selections.startDate);
    var dateNow = new Date().getDate();
    if (date === "") {
      console.log("Date is empty");
    } else {
      const uDate = date.substring(date.length - 2);
      return uDate - dateNow;
    }
  };

  getRecomendation2 = (key, id, day) => {
    const dayR = this.getDay(day);
    console.log(dayR);

    axios
      .get(`?daily=${dayR}&q=${id},AU&APPID=${key}`)
      .then(function(response) {
        // this.setState({ weather1: response.data.message });
        console.log(response.data.message);
      })
      .catch(function(error) {
        console.log(error);
      });

    //return <div>response.data.message</div>;
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
  };

  render() {
    return (
      <div>
        <div>
          <h1>Weather when you are leaving is:</h1>
          <div>
            <button
              conclick={this.getRecomendation2(
                this.state.key,
                this.props.selections.startLoc,
                this.props.selections.startDate
              )}
            >
              Click me{" "}
            </button>
          </div>
        </div>
        <div>
          <h1>Weather when you are arriving is:</h1>
          <div />
        </div>
      </div>
    );
  }
}

export default Weather;
