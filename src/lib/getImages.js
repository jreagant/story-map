import axios from 'axios';

const getImages = (name, address) => {
  const splitAddress = address.split(',');
  const place = splitAddress[splitAddress.length - 1];
  const query = `${name} ${place}`;

  return axios.get(`/images/${query}`);
};

export default getImages;
