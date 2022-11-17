var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET detail onion page*/
router.get('/detail', onion_controllers.onion_view_one_Page);
/* GET create onion page*/
router.get('/create', onion_controllers.onion_view_one_Page);
/* GET create update page*/
router.get('/update', onion_controllers.onion_view_one_Page);

module.exports = router;
