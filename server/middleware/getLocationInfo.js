require('dotenv').config();

const googleMaps = require('@google/maps').createClient({
  key: process.env.MAPS_TOKEN,
  Promise: Promise,
});

const getPlaceId = (req, res) => {
  const { address } = req.params;

  googleMaps.geocode({ address })
    .asPromise()
    .then(result => {
      console.log(result.json.results[0].address_components);
      res.status(200).send(result);
      // fetch place info from placeId
    })
    .catch(error => {
      res.status(400).send({Error: error});
      console.error(error);
    });
}

module.exports = getPlaceId;