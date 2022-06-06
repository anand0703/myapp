var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "anand's world" });
});

router.post('/signup', function(req, res, next){
  res.render('index', {name: req.body.nameInput});
});

module.exports = router;
