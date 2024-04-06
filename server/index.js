/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');

const getNearbyLocations = require('./middleware/getNearbyLocations');
const getArticles = require('./middleware/getArticles');
const getArticleSections = require('./middleware/getArticleSections');
const getHistorySection = require('./middleware/getHistorySection');
const getLocationSummary = require('./middleware/getLocationSummary');
const getImages = require('./middleware/getImages');
const getHeroImage = require('./middleware/getHeroImage');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/locations/nearby', getNearbyLocations);
app.get(
  '/location/:query',
  getArticles,
  getArticleSections,
  getHistorySection,
  getLocationSummary,
);
app.get('/images/:query', getImages);
app.post('/images/main/', getHeroImage);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
