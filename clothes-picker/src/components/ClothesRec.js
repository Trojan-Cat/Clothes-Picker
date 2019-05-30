import React from "react";
import Clothes from "./Clothes";

class ClothesRec extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.data.map(function(d, idx) {
          return (
            <div className="ui segment" key={idx}>
              <h3 className="header">Day: {idx} </h3>
              <p>
                The temp will be: {d.main.temp}c&ordm;, and it should be
                {d.weather[0].main}
              </p>

              <h4 className="header">
                clothes Suggestion <Clothes weather={d.weather[0].main} />
              </h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClothesRec;
