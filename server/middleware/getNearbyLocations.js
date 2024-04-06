require('dotenv').config();

const axios = require('axios');

const getNearbyLocations = async (req, res) => {
  const url = 'https://places.googleapis.com/v1/places:searchNearby';

  const location = {
    longitude: req.query.longitude,
    latitude: req.query.latitude,
  };
  const radius = 1500.0;
  const fields = 'places.displayName,places.shortFormattedAddress,places.photos,places.editorialSummary,places.googleMapsUri,places.id,places.location';

  const data = {
    includedTypes: ['historical_landmark'],
    maxResultCount: 10,
    locationRestriction: {
      circle: {
        center: location,
        radius,
      },
    },
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': 'AIzaSyCSW52y644XbU0YHKMSVTHAoRJ5puP1Mxk',
    'X-Goog-FieldMask': fields,
  };

  try {
    const result = await axios.post(url, data, { headers });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(400).send({ Error: error });
  }
};

module.exports = getNearbyLocations;
