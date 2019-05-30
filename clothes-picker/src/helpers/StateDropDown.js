import React from "react";
import { Dropdown } from "semantic-ui-react";

//TODO: Change to use all-the-cities rather than static list

const CityOptions = [
  {
    key: "Sydney",
    text: "Sydney",
    value: "Sydney"
  },
  {
    key: "Melbourne",
    text: "Melbourne",
    value: "Melbourne"
  },
  {
    key: "Brisbane",
    text: "Brisbane",
    value: "Brisbane"
  },
  {
    key: "Perth",
    text: "Perth",
    value: "Perth"
  },
  {
    key: "Adelaide",
    text: "Adelaide",
    value: "Adelaide"
  },
  {
    key: "Gold Coast",
    text: "Gold Coast",
    value: "Gold Coast"
  }
];

const StateDropDown = () => (
  <Dropdown placeholder="Select A City" fluid selection options={CityOptions} />
);

export default StateDropDown;
