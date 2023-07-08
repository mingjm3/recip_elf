const express = require('express');
const router = express.Router();
const axios = require('axios');

const { OpenAIApi } = require("openai");

router.post('/', function(req, res, next) {
  var requestBody = req.body;
  var users = requestBody.users;
  var cuisines = requestBody.cuisines;
  var dietaryRestrictions = requestBody.dietaryRestrictions;
  var foods = requestBody.foods;

  var messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hello!" },
  ];

  var userMessage = {
    role: "user",
    content: `I'm looking for recipes based on the following criteria:
      Cuisines: ${cuisines.join(", ")}
      Dietary Restrictions: ${dietaryRestrictions.join(", ")}
      Foods: ${foods.join(", ")}`
  };
  messages.push(userMessage);

  console.log(messages);

  axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-3.5-turbo",
    messages: messages
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${process.env.API_KEY}'
    }
  })
  .then(function(response) {
    var generatedText = response.data.choices[0].message.content;
    res.json({ response: generatedText });
  })
  .catch(function(error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  });
});

module.exports = router;
