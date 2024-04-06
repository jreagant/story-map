const axios = require('axios');

const getArticles = (req, res, next) => {
  axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: req.params.query,
      srlimit: 10,
      origin: '*',
    },
  })
    .then((result) => {
      req.articles = result;
      next();
    })
    .catch((error) => {
      res.status(400).send({
        Message: 'Error retrieving articles.',
        Error: error,
      });
    });
};

module.exports = getArticles;
