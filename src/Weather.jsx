import React, {useState} from "react";
import axios from "axios";
import { WiDayCloudy } from "react-icons/wi";

function Weather() {  
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [zipcode, setZipcode] = useState(
    localStorage.getItem('zipcode') || 14094
    );

  function handleZipChange(event) {
    setZipcode(event.target.value);
    localStorage.setItem('zipcode', event.target.value);
  }

  function getWeatherInfo(zipcode) {
    const getUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=c4e201097cda19b25eaf5c8f4bb31f0a`;
    
    axios
    .get(getUrl)
    .then((response) => {
        const { temp, feels_like, humidity } = response.data.main;
        const windSpeed = response.data.wind.speed;
        setTemp(temp);
        setFeelsLike(feels_like);
        setHumidity(humidity);
        setWindSpeed(windSpeed);
    })
    .catch((error) => {
        console.log(error);
    });
  }

  setInterval(getWeatherInfo(zipcode), 3600000);

  return (
    <div className="widget">
      <h1><WiDayCloudy className="react-icons"/> Weather</h1>
      <p className="bold">in {zipcode}</p>
      <p>
        Current Temperature: {temp}&#8457;<br />
        Feels like: {feelsLike}&#8457;<br />
        Humidity: {humidity}%<br />
        Wind Speed: {windSpeed}Mph
      </p>
      <label>US Zip Code: </label>
      <input 
        type="text" 
        onChange={handleZipChange} 
        placeholder="14094" 
        value={zipcode} 
        size="5" 
      />
    </div>
  );
}

export default Weather;