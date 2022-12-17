import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]=useState(null);
  

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
  }
  
   if (loaded){
   return (
     <div className="WeatherForecast">
       <div className="row">
        {forecast.map(function(dailyForecast, index)
        { if (index < 5){
        return (
        <div className="col" key={index}>
 <ForecastDay data={dailyForecast} /></div>
        );
      }else{
        return null;
      }
      })}     
 </div> </div>);}
       
else{
     let apiKey="fe1483f743b581b5520a1b725af03a49";
    let longitude=props.coord.lon;
    let latitude=props.coord.lat;
    let apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
   Axios.get(apiUrl).then(handleResponse);
   return null;
}}