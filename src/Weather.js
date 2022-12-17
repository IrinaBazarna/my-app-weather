import React, { useState } from "react";
import WeatherDate from "./WeatherDate";
import Forecast from "./Forecast";
import axios from "axios";

 export default function WeatherInf(props) {
  const [weather, setWeather] = useState({ready:false});
  const [city, setCity] = useState(props.city);

  function handleRespose(response) {
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
    const apiKey = "62bc298785543e137bc6756e514eb1c3";
    let apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
     axios.get(apiUrl).then(handleRespose);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
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

