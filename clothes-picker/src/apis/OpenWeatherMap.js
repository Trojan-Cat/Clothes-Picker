import axios from "axios";

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/forecast`
});

/*

api.openweathermap.org/data/2.5/forecast?id={city ID} 
export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/forecast?daily=${day}&id=${id}?APPID=${key}`
});
*/
