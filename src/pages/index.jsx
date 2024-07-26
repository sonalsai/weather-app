/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import WeatherDisplay from '../components/WeatherDisplay/WeatherDisplay'
import LocationContainer from '../components/LocationContainer/LocationContainer'
import axios from 'axios'

function Index() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const [locationName, setLocationName] = useState("");
  const [data, setData] = useState({})
  const [errorMsg, setErrorMsg] = useState(false)

  const handleLocation = (e) => {
    e.preventDefault()
    setLocationName(e.target.value)
  }

  const getData = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`)
      .then((response) => {
        const result = response.data;
        setLocationName("")
        setErrorMsg(false)
        setData(result)
      })
      .catch((error) => {
        setLocationName("")
        setErrorMsg(true)
        console.log(error)
      })

  }

  return (
    <>
      <Header />
      <div className="bodyContainer">
        <LocationContainer handleLocation={handleLocation} locationName={locationName} getData={getData} />
        {
          errorMsg === true ? (
            <>
              <div className="errorDisplay">
                <span className='errorMessage'>Not Found</span>
              </div>
            </>
          ) : (
            <>
              {data.location && <WeatherDisplay data={data} />}
            </>
          )
        }
      </div>
    </>
  )
}

export default Index