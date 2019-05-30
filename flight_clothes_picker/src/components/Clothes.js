import React from "react";

const Clothes = ({ weather }) => {
  if (weather === "Clouds") {
    return <div>Wear pants silly</div>;
  } else {
    return <div>I really have no idea what you should wear</div>;
  }
};

/*switch (weather) {
      case "Clouds":
        <div>Wear pants silly</div>;
        break;
      case "Rain":
        return <div>Wear pants silly and pack an Umbrella</div>;
        break;
      default:
        return <div>I really have no idea</div>;
        break;
    }
    */

export default Clothes;
