var express = require('express');
var router = express.Router();
const axios=require('axios')

/* GET home page. */
router.get('/:path', async function (req, res, next) {
  var apiKey = '13cd61f5fd174979a8a0cc3c94b3628d'
  var path = req.originalUrl

  var url = 'https://newsapi.org/v2' + path + '&apiKey=' + apiKey
  var response = await axios.get(url)
  return res.send('response.data');
});

module.exports = router;
