var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//Get Homepage
router.get('/', (req, res) => res.send('Welcome to Crediation!'))


module.exports = router;
