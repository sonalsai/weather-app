import { useState } from 'react';
import Header from '../components/Header/Header';
import WeatherDisplay from '../components/WeatherDisplay/WeatherDisplay';
import LocationContainer from '../components/LocationContainer/LocationContainer';
import { getWeatherData } from '../services/weatherService';

function WeatherContainer() {
  const [locationName, setLocationName] = useState('');
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLocation = (e) => {
    setLocationName(e.target.value);
  };

  const getData = async () => {
    if (!locationName) return;
    setLoading(true);
    setErrorMsg(false);
    setData(null);
    try {
      const result = await getWeatherData(locationName);
      setData(result);
    } catch (error) {
      setErrorMsg(true);
    } finally {
      setLoading(false);
      setLocationName('');
    }
  };

  return (
    <>
      <Header />
      <div className="bodyContainer">
        <LocationContainer
          handleLocation={handleLocation}
          locationName={locationName}
          getData={getData}
        />
        {loading && <div className="loading"></div>}
        {errorMsg && <div className="errorDisplay"><span className='errorMessage'>Not Found</span></div>}
        {data && <WeatherDisplay data={data} />}
      </div>
    </>
  );
}

export default WeatherContainer;