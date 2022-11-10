var express = require('express');
const onion_controller=require('../controllers/onionController')
var router = express.Router();

/* GET onion page. */
router.get('/', onion_controller.onion_view_all_Page);
module.exports = router;
