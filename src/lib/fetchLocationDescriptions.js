import axios from 'axios';

const fetchLocationDescriptions = (name, address) => {
  const splitAddress = address.split(',');
  const place = splitAddress[splitAddress.length - 1];
  const query = `${name}${place}`;

  return axios.get(`/location/${query}`);
};

export default fetchLocationDescriptions;
