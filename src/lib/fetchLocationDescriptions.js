import axios from 'axios';

const fetchLocationDescriptions = (name) => {
  return axios.get(`/location/${name}`)
};

export default fetchLocationDescriptions;