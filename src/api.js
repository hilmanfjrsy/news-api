const express = require("express");
const axios = require("axios");
var cors = require('cors')
const serverless = require("serverless-http");

const app = express();
app.use(cors())
const router = express.Router();

router.get("/:path", async function (req, res){
  var apiKey = '13cd61f5fd174979a8a0cc3c94b3628d'
  var path = req.originalUrl.replace('/.netlify/functions/api','')

  var url = 'https://newsapi.org/v2' + path + '&apiKey=' + apiKey
  var response = await axios.get(url)
  return res.send(response.data);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);