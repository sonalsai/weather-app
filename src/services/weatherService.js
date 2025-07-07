
import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl = import.meta.env.VITE_WEATHER_API_URL;

export const getWeatherData = async (locationName) => {
  try {
    const response = await axios.get(`${apiUrl}/current.json?key=${apiKey}&q=${locationName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
};
