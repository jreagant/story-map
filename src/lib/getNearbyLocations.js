import axios from 'axios';

const getNearbyLocations = async (location) => {
  const params = {
    longitude: location.longitude,
    latitude: location.latitude,
  };

  try {
    const result = await axios.get('/locations/nearby', { params });
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getNearbyLocations;
