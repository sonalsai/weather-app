import PropTypes from 'prop-types';
import "./weatherDisplay.scss";

function WeatherDisplay({ data }) {
  if (!data) {
    return null;
  }

  const { location, current } = data;
  const { name, region, lat, lon } = location;
  const { temp_c, temp_f, pressure_in, condition } = current;

  return (
    <div className='weatherDataContainer'>
      <span className="locationName">{name}</span>
      <span className="region">{region}</span>
      <div className="weatherDetails">
        <span className="latLon"><label htmlFor="latLon">Lat-Lon &#58; </label> {lat}° Latitude , {lon}° Longitude</span>
        <span className="tempratureC"><label htmlFor="tempratureC">Temprature_C &#58; </label> {temp_c} C°</span>
        <span className="tempratureF"><label htmlFor="tempratureF">Temprature_F &#58; </label> {temp_f} F°</span>
        <span className="pressure"><label htmlFor="pressure">Pressure &#58; </label> {pressure_in} inHg°</span>
        <div className="condition">
          <label htmlFor="condition">Weather Condition &#58; </label>
          <span> {condition.text}
          </span>
        </div>
      </div>
    </div>
  )
}

WeatherDisplay.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
      region: PropTypes.string,
      lat: PropTypes.number,
      lon: PropTypes.number,
    }),
    current: PropTypes.shape({
      temp_c: PropTypes.number,
      temp_f: PropTypes.number,
      pressure_in: PropTypes.number,
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  }),
};

export default WeatherDisplay;