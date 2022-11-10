var express = require('express');
var router = express.Router();

/* GET onion page. */
router.get('/', function(req, res, next) {
  res.render('onion', { title: 'Search Results Onion' });
});

module.exports = router;
