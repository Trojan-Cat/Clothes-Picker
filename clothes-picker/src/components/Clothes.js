import React from "react";
import axios from "axios";

const Clothes = ({ weather }) => {
  /*if (weather === "Clouds") {
    return <div>Wear pants silly</div>;
  } else {
    return <div>I really have no idea what you should wear</div>;
  }
  */

  switch (weather) {
    case "Clouds":
      return <div>Cloudly so wear a jumper </div>;
      break;
    case "Rain":
      return <div>Wear pants silly and pack an Umbrella</div>;
      break;
    case "Wind":
      return <div>Hope your house is not made of straw</div>;
      break;
    case "Clear":
      return <div>Tshirt only</div>;
      break;
    case "Snow":
      return <div>Just stay inside</div>;
      break;
    case "Drizzle":
      return <div>Pack a light raincoat, and some pants</div>;
      break;
    case "Thunderstorm":
      return <div>Heavy Jacket and stayout of the Lighti</div>;
      break;
    default:
      return <div>I really have no idea</div>;
      break;
  }
};

export default Clothes;
