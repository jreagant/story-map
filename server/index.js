require('dotenv').config();

const express = require('express');
const path = require('path');

const getNearbyLocations = require('./controllers/getNearbyLocations');
const getWikiTitle = require('./controllers/getWikiTitle');
const getImages = require('./controllers/getImages');
const getHeroImage = require('./controllers/getHeroImage');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/locations/nearby', getNearbyLocations);
app.get('/location/:query', getWikiTitle);
app.get('/images/:query', getImages);
app.post('/images/main/', getHeroImage);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
