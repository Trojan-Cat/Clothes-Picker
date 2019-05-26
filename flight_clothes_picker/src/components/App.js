import React from "react";
import axios from "../apis/OpenWeatherMap";

import Selection from "./Selection";

const key = "56f09b962e8a014f246bffc48f44b792";
const id = "7299965";
const day = "2";

//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
axios
  .get(`?daily=${day}&id=${id}&APPID=${key}`)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

const App = () => {
  return (
    <div className="ui container">
      <div>
        <h1 className="ui  center aligned header">
          Select your flight details
        </h1>
      </div>
      <Selection />
    </div>
  );
};

export default App;
