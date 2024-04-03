require('dotenv').config();

const axios = require('axios');
const OpenAI = require('openai');

const chatGPT = new OpenAI({ apiKey: process.env.OPENAI_TOKEN });

/**
 * Provide a summary of the following text. Write a 250-word intro that highlights the historical significance of the topic, followed by a line break, then the rest of the summary:\n\n${content}
 */

const getWikiInfo = async (req, res, next) => {
  axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      generator: 'search',
      gsrsearch: req.params.name,
      prop: 'extracts',
      exintro: true,
      explaintext: true,
      format: 'json',
      redirects: 1,
    }
  })
    .then(result => {
      console.log('got the article');
      const pages = result.data.query.pages;
      const pageId = Object.keys(pages)[0];
      const title = pages[pageId].title;

      axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'parse',
          page: title,
          prop: 'sections',
          format: 'json',
        }
      })
        .then(result => {
          console.log('got the sections');
          const sections = result.data.parse.sections;
          const historySection = sections.find(section => section.line.toLowerCase() === 'history');

          if (historySection) {
            axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                action: 'parse',
                page: title,
                section: historySection.index,
                prop: 'text',
                format: 'json',
              }
            })
              .then(result => {
                console.log('got the history section')
                const text = result.data.parse.text['*'];
                const primer = 'You are a history teacher. You will be provided with lengthy text about a historical site, and you will provide a factual summary of the text. Your summaries will consist of a 50-word teaser paragraph, followed by additional paragraphs completing the summary.'

                chatGPT.chat.completions.create({
                  messages: [
                    { role: 'system', content: primer},
                    { role: 'user', content: text }
                  ],
                  model: 'gpt-4-0125-preview',
                })
                  .then(result => {
                    res.status(200).send(result.choices[0].message.content);
                  })
                  .catch(error => {
                    console.log(error);
                    res.status(400).send({Error: error})
                  });
              })
              .catch(error => {
                console.log(`OpenAI: ${error}`);
                res.status(400).send({Error: error})});
          } else {
            res.status(200).send('The extract');
          }
        })
    })
    .catch(error => res.status(400).send({Error: error}));
}

module.exports = getWikiInfo;
