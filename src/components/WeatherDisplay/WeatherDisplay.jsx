/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./weatherDisplay.scss"

function WeatherDisplay({ locationName, tempratureC, data }) {
  let Icon = data.current.condition.icon;

  return (
    <div className='weatherDataContainer'>
      <span className="locationName">{data.location.name}</span>
      <span className="region">{data.location.region}</span>
      <div className="weatherDetails">
        <span className="latLon"><label htmlFor="latLon">Lat-Lon &#58; </label> {data.location.lat}° Latitude , {data.location.lon}° Longitude</span>
        <span className="tempratureC"><label htmlFor="tempratureC">Temprature_C &#58; </label> {data.current.temp_c} C°</span>
        <span className="tempratureF"><label htmlFor="tempratureF">Temprature_F &#58; </label> {data.current.temp_f} F°</span>
        <span className="pressure"><label htmlFor="pressure">Pressure &#58; </label> {data.current.pressure_in} inHg°</span>
        <div className="condition">
          <label htmlFor="condition">Weather Condition &#58; </label>
          <span> {data.current.condition.text} 
          </span>
          
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay