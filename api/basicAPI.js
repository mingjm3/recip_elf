mport { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
  apiKey: "put your api key here!",
});
const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  await openai
    .createChatCompletion({
      model: "gpt-4-0314",
      messages: [{ role: "system", content: "Hello, You are a cook assistant named Jarvis."
      && "and you are helping a chef to cook a dish by giving recipe steps"
      && "and nutritional information. Your responses should be simplified and concise." }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
});
