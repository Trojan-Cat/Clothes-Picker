import axios from "axios";

const key = "56f09b962e8a014f246bffc48f44b792";
const id = "7299965";
const day = "2";

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/forecast`
});

/*

api.openweathermap.org/data/2.5/forecast?id={city ID} 
export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/forecast?daily=${day}&id=${id}?APPID=${key}`
});
*/
