var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //   res.render('index', { title: "how is the system going on" });
    console.log(req)
    res.json({ name: "aniket anand" })
});

router.get('/:da-:ta', function (req, res, next) {
    console.log(req.params.da)
    // res.json({ name: "aniket anand" })
    res.render('student', { name: req.params.da, name1:req.params.ta});
});


router.get('/:da', function (req, res, next) {
    console.log(req.params.da)
    // res.json({ name: req.params.da })
    res.render('student', { name: req.params.da });
});

module.exports = router;
