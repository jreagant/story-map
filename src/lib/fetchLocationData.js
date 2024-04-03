import axios from 'axios';

const fetchLocationData = (location) => {
  const body = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  return axios.get('/location', body);
}

export default fetchLocationData;
