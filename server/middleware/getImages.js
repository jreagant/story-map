require('dotenv').config();

const axios = require('axios');

const getImages = (req, res) => {
  axios.get('https://api.dp.la/v2/items', {
    params: {
      api_key: process.env.DPLA_TOKEN,
      q: req.params.query,
      'sourceResource.type': 'image',
      page_size: 12,
    },
  })
    .then((result) => res.status(200).send(result.data))
    .catch((error) => res.status(400).send({ Error: error }));
};

module.exports = getImages;
