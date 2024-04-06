require('dotenv').config();

const axios = require('axios');
const OpenAI = require('openai');

const chatGPT = new OpenAI({ apiKey: process.env.OPENAI_TOKEN });

const getWikiTitle = (req, res, next) => {
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
    .then((titleResult) => {
      const { search } = titleResult.data.query;
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
          const { sections } = result.data.parse;
          const historySection = sections.find((section) => section.line.toLowerCase() === 'history');

          if (historySection) {
            axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                action: 'parse',
                page: title,
                section: historySection.index,
                prop: 'text',
                explaintext: true,
                format: 'json',
              },
            })
              .then((historyResult) => {
                const text = historyResult.data.parse.text['*'];
                const primer = 'You are a history teacher. You will be provided with lengthy text about a historical site, and you will provide a factual summary of the text. Each sentence in your summaries should be a new paragraph.';

                chatGPT.chat.completions.create({
                  messages: [
                    { role: 'system', content: primer },
                    { role: 'user', content: text },
                  ],
                  model: 'gpt-4-turbo-preview',
                })
                  .then((chatGptResult) => {
                    res.status(200).send(chatGptResult.choices[0].message.content);
                  })
                  .catch((error) => {
                    console.log(error);
                    res.status(400).send({ Error: error });
                  });
              })
              .catch((error) => {
                console.log(`OpenAI: ${error}`);
                res.status(400).send({ Error: error });
              });
          } else {
            res.status(200).send('The extract');
          }
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send({ Error: error });
    });
};

module.exports = getWikiTitle;
