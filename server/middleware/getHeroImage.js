require('dotenv').config();

const axios = require('axios');

const getHeroImage = (req, res) => {
  const key = process.env.MAPS_TOKEN;
  const name = req.body.ref;
  const url = `https://places.googleapis.com/v1/${name}/media?maxHeightPx=300&maxWidthPx=300&skipHttpRedirect=true&key=${key}`;

  axios.get(url)
    .then((result) => res.status(200).send(result.data.photoUri))
    .catch((error) => res.status(400).send({ GoogleError: error }));
};

module.exports = getHeroImage;
