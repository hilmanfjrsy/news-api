const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/:path", async (req, res) => {
  var apiKey = '13cd61f5fd174979a8a0cc3c94b3628d'
  var path = req.originalUrl

  var url = 'https://newsapi.org/v2' + path + '&apiKey=' + apiKey
  var response = await axios.get(url)
  return res.send(response.data);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);