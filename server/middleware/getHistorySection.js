const axios = require('axios');

const getHistorySection = (req, res, next) => {
  const { sections } = req.articleSections.data.parse;
  const historySection = sections.find(
    (section) => section.line.toLowerCase() === 'history',
  );

  if (historySection) {
    axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'parse',
        page: req.articleTitle,
        section: historySection.index,
        prop: 'text',
        explaintext: true,
        format: 'json',
      },
    })
      .then((result) => {
        req.historyResult = result;
        next();
      })
      .catch((error) => {
        res.status(400).send({
          Message: 'Error retriving history source.',
          Error: error,
        });
      });
  } else {
    res.status(200).send(req.articleExtract);
  }
};

module.exports = getHistorySection;
