const express = require('express');
const winston = require('winston')
const router = express.Router();
const axios = require('axios');
const { isAuthed } = require('../lib/auth/jwt')

const { OpenAIApi } = require("openai");

router.use(isAuthed)
/**
 * {
 *    cuisine: string
 *    foods: string[]
 *    dietaryRestrictions: string[]
 * }
 */
router.post('/', function(req, res, next) {
  logger.log('debug', 'body', req.body)
  var requestBody = req.body;
  var users = requestBody.users;
  var cuisine = requestBody.cuisine;
  var dietaryRestrictions = requestBody.dietaryRestrictions;
  var foods = requestBody.foods;

  var messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hello!" },
  ];

  const prompt = [
    `Please make me a recipe that is from the ${cuisine} cuisine }.\n`,
    `it should use only the following ingredients: ${foods.map(food => food.name).join(", ")}.\n`,
    `Don't include any of the following ingredients: ${dietaryRestrictions.join(", ")}`
  ].join('')

  var userMessage = {
    role: "user",
    content: prompt
  };
  messages.push(userMessage);

  logger.log('debug', 'messages', messages);

  axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-3.5-turbo",
    messages: messages
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  })
  .then(function(response) {
    logger.log('debug', 'response', response)
    var generatedText = response.data.choices[0].message.content;
    res.json({ response: generatedText });
  })
  .catch(function(error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  });
});

module.exports = router;
