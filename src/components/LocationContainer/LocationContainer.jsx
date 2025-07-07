import PropTypes from 'prop-types';
import "./locationContainer.scss";

function LocationContainer({ getData, handleLocation, locationName }) {
    return (
        <div className='locationContainer'>
            <label htmlFor="locationInput">Enter The Location </label>
            <input type="text" name="locationInput" id="locationInput" value={locationName} onChange={handleLocation} />
            <button className="checkBtn" onClick={getData}>Check</button>
        </div>
    )
}

LocationContainer.propTypes = {
    getData: PropTypes.func.isRequired,
    handleLocation: PropTypes.func.isRequired,
    locationName: PropTypes.string.isRequired,
};

export default LocationContainer;