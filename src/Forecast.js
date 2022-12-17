import { Axios } from "axios";
import React, { useState } from "react";
import IconForecast from "./IconForecast";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]=useState(null);
  
  
    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
  }
  
   if (loaded){
   return (
     <div className="WeatherForecast">
       <div className="row">
         <div className="col">
           <div className="Forecast-day"> Thu</div>
           <ForecastDay data={forecast[0]} />
           <IconForecast size={36} />
           <div className="Forecast-temperature">
             <div className="Forecast-temperature-max">19</div>{" "}
             <div className="Forecast-temperature-min">10</div>
           </div>
         </div>

         <div className="col">
           <div className="Forecast-day"> Thu</div>
           <ForecastDay data={forecast[1]} />
           <IconForecast size={36} />
           <div className="Forecast-temperature">
             <div className="Forecast-temperature-max">19</div>{" "}
             <div className="Forecast-temperature-min">10</div>
           </div>
         </div>

         <div className="col">
           <div className="Forecast-day"> Thu</div>
           <ForecastDay data={forecast[2]} />
           <IconForecast size={36} />
           <div className="Forecast-temperature">
             <div className="Forecast-temperature-max">19</div>{" "}
             <div className="Forecast-temperature-min">10</div>
           </div>
         </div>

         <div className="col">
           <div className="Forecast-day"> Thu</div>
           <ForecastDay data={forecast[3]} />
           <IconForecast size={36} />
           <div className="Forecast-temperature">
             <div className="Forecast-temperature-max">19</div>{" "}
             <div className="Forecast-temperature-min">10</div>
           </div>
         </div>
       </div>
     </div>
   );
}else{
     let apiKey="fe1483f743b581b5520a1b725af03a49";
    let longitude=props.coord.lon;
    let latitude=props.coord.lat;
    let apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
   Axios.get(apiUrl).then(handleResponse);
   
}}