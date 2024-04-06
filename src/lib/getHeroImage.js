import axios from 'axios';

const getHeroImage = (ref) => axios.post('/images/main/', { ref });

export default getHeroImage;
