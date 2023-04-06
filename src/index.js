import './style.css';
import { fetchData } from "./fetch"
import "./render.js";

window.fetchData = fetchData;

// function fetchWeather_P(city) {

//     fetch(`http://api.weatherapi.com/v1/current.json?key=16a5ed2391264204a69182936230104&q=${city}&aqi=no`,
//         { mode: "cors" })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (obj) {
//             console.log(`City: ${obj.location.name}, Country: ${obj.location.country}, Temperature (C): ${obj.current.temp_c}, Temperature (F): ${obj.current.temp_f}`);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

// }
// window.weatherP = fetchWeather_P;