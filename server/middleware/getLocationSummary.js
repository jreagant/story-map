require('dotenv').config();

const OpenAI = require('openai');

const chatGPT = new OpenAI({ apiKey: process.env.OPENAI_TOKEN });

const getLocationSummary = (req, res) => {
  const text = req.historyResult.data.parse.text['*'];
  const primer = 'You are a history teacher. You will be provided with lengthy text about a historical site, and you will provide a factual summary of the text. Each sentence in your summaries should be a new paragraph.';

  chatGPT.chat.completions.create({
    messages: [
      { role: 'system', content: primer },
      { role: 'user', content: text },
    ],
    model: 'gpt-4-turbo-preview',
  })
    .then((result) => {
      res.status(200).send(result.choices[0].message.content);
    })
    .catch((error) => res.status(400).send({
      Message: 'Error retrieving location summary',
      Error: error,
    }));
};

module.exports = getLocationSummary;
