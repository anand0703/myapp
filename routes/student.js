var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //   res.render('index', { title: "how is the system going on" });
    console.log(req)
    res.json({ name: "aniket anand" })
});

router.get('/login', function (req, res, next) {
    console.log(req.query)
    // res.send({"name":"Aniket"});
    res.render('student');
    // res.json({ "Name": "What's up" });
  });

router.get('/:da-:ta', function (req, res, next) {
    console.log(req.params.da)
    // res.json({ name: "aniket anand" })
    res.render('student', { name: req.params.da, name1:req.params.ta});
});
router.get('/getLogin', function (req, res, next) {
    console.log(req.query)
    con.connect()
    con.query("select * from form", function (err, result) {
      if (err) throw err;
      console.log(result);
      res.render('login', { "data": result })
    });
    router.post('/updateLogin', function (req, res, next) {
        console.log(req.body)
        res.json({ "Name": "Hello" })
      });


router.get('/:da', function (req, res, next) {
    console.log(req.params.da)
    // res.json({ name: req.params.da })
    res.render('student', { name: req.params.da });
});

module.exports = router;
