const axios = require('axios');

const getArticleSections = (req, res, next) => {
  const { search } = req.articles.data.query;
  const { title } = search[0];

  axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'parse',
      page: title,
      prop: 'sections',
      format: 'json',
    },
  })
    .then((result) => {
      req.articleSections = result;
      req.articleTitle = title;
      next();
    })
    .catch((error) => {
      res.status(400).send({
        Message: 'Error retriving article sections.',
        Error: error,
      });
    });
};

module.exports = getArticleSections;
