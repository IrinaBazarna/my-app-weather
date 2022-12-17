import React from "react";
import IconForecast from "./IconForecast";


export default function ForecastDay(props){
    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }

function day(){
    let date=new Date(props.date.dt*1000);
let day=date.getDay();
let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
return days[day];
}
return( <div>
    <div className="Forecast-day"> {day()}</div>
           <IconForecast size={36} />
           <div className="Forecast-temperature">
             <div className="Forecast-temperature-max">{maxTemperature()}</div>{" "}
             <div className="Forecast-temperature-min">{minTemperature()}</div>
           </div></div>);
}