var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome pageee')
  const i = 0;
  console.log(i , ":num");
  i++;
  // res.render('index', { title: 'Express' });
});

module.exports = router;
