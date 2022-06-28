var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createPool({
  connectionLimit: 100,
  host: 'easylearning.guru',
  user: 'kcc_student',
  password: 'Kccitm.edu.in1',
  database: 'kccStudent'
});

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req)
  con.getConnection(function (err, connection) {
    connection.query("SELECT * FROM  aniket_data ORDER BY id", function (err, results) {
      if (err) throw err;
      else console.log(results);
      res.render('index', { "data": results, title: 'aniket calculator' });
    });
  });
});


router.all('/add', function (req, res, next) {
  console.log(req.body);
  var num1 = parseFloat(req.body.a);
  var num2 = parseFloat(req.body.b);
  var optr = "+";
  console.log(num1);
  console.log(num2);
  var result = num1 + num2;
  console.log(result);
  res.json(result);
  con.getConnection(function (err, connection) {
    connection.query("INSERT INTO aniket_data (num1, num2 , op, res) VALUES ('" + num1 + "', '" + num2 + "','" + optr + "','" + result + "')", function (err, rows) {
      connection.release();
      if (err) throw err;
      else console.log(rows.length);
    });
  });
});

router.all('/sub', function (req, res, next) {
  console.log(req.body);
  var num1 = parseFloat(req.body.a);
  var num2 = parseFloat(req.body.b);
  var optr = "-";
  var result = num1 - num2;
  console.log(result);
  res.json(result);
  con.getConnection(function (err, connection) {
    connection.query("INSERT INTO aniket_data (num1, num2 , op, res) VALUES ('" + num1 + "', '" + num2 + "','" + optr + "','" + result + "')", function (err, rows) {
      connection.release();
      if (err) throw err;
      else console.log(rows.length);
    });
  });
});

router.all('/mul', function (req, res, next) {
  console.log(req.body);
  var num1 = parseFloat(req.body.a);
  var num2 = parseFloat(req.body.b);
  var optr = "*";
  var result = num1 * num2;
  console.log(result);
  res.json(result);
  con.getConnection(function (err, connection) {
    connection.query("INSERT INTO aniket_data (num1, num2 , op, res) VALUES ('" + num1 + "', '" + num2 + "','" + optr + "','" + result + "')", function (err, rows) {
      connection.release();
      if (err) throw err;
      else console.log(rows.length);
    });
  });
});

// Calculating data from table 
router.post('/updateData', function (req, res, next) {
  console.log(req.body)
  con.getConnection(function (err, connection) {
    connection.query("SELECT * FROM  aniket_data ORDER BY id", function (err, results) {
      if (err) throw err;
      else console.log(results);
      res.json(results)
    });
  });
});

// Calculated data from table now inserting in table
router.all('/insertUpdate', function (req, res, next) {
  console.log(req.body);
  var num1 = req.body.a;
  var num2 = req.body.b;
  var optr = req.body.op;
  var result = req.body.rest;

  // if operator === "+"
  if(optr === '+'){
    con.getConnection(function (err, connection) {
      connection.query("INSERT INTO aniket_data (num1, num2 , op, res) VALUES ('" + num1 + "', '" + num2 + "','" + optr + "','" + result + "')", function (err, rows) {
        connection.release();
        if (err) throw err;
        else console.log(rows.length);
      });
    });
  }

  // if operator === "-"
  if(optr === '-'){
    con.getConnection(function (err, connection) {
      connection.query("INSERT INTO aniket_data (num1, num2 , op, res) VALUES ('" + num1 + "', '" + num2 + "','" + optr + "','" + result + "')", function (err, rows) {
        connection.release();
        if (err) throw err;
        else console.log(rows.length);
      });
    });
  }

  // if operator === "*"
  if(optr === '*'){
    con.getConnection(function (err, connection) {
      connection.query("INSERT INTO aniket_data (num1, num2 , op, res) VALUES ('" + num1 + "', '" + num2 + "','" + optr + "','" + result + "')", function (err, rows) {
        connection.release();
        if (err) throw err;
        else console.log(rows.length);
      });
    });
  }

});



router.post('/signup', function(req, res, next){
  res.render('index', {name: req.body.nameInput});
});

module.exports = router;
