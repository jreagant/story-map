require('dotenv').config();

const express = require('express');
const path = require('path');

const getLocationInfo = require('./controllers/getLocationInfo');
const getWikiInfo = require('./controllers/getWikiInfo');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/location/:name', getWikiInfo);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
