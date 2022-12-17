import React, { useState } from "react";
import WeatherDate from "./WeatherDate";
import Forecast from "./Forecast";
import axios from "axios";

function WeatherInf(props) {
  const [ready, setReady]=useState(false);
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function weatherDate(response) {
    setWeather({
      ready: true,
      coord:response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }
  function search() {
   
    const apiKey = "bd3bb6534458ba51b48c49f5155745b6";
    let apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
     axios.get(apiUrl).then(weatherDate);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setReady(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div>
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city"
                  onChange={updateCity}
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn" />
              </div>
            </div>
          </form>
        </div>
        <WeatherDate data={weather} />
        <Forecast coord={weather.coord}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
export default WeatherInf;
