require('dotenv').config();

const express = require('express');
const path = require('path');

const getNearbyLocations = require('./middleware/getNearbyLocations');
const getWikiTitle = require('./middleware/getWikiTitle');
const getImages = require('./middleware/getImages');
const getHeroImage = require('./middleware/getHeroImage');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/locations/nearby', getNearbyLocations);
app.get('/location/:query', getWikiTitle);
app.get('/images/:query', getImages);
app.post('/images/main/', getHeroImage);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
