/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./locationContainer.scss"

function LocationContainer({ getData, handleLocation, locationName }) {
    return (
        <div className='locationContainer'>
            <label htmlFor="locationInput">Enter The Location </label>
            <input type="text" name="locationInput" id="locationInput" value={locationName} onChange={(e) => handleLocation(e)} />
            <button className="checkBtn" onClick={() => getData()}>Check</button>
        </div>
    )
}

export default LocationContainer