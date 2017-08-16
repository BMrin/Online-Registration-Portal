var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade');
});

router.post('/login', function(req, res) {
      var userID = req.body.userid; 
      var password = req.body.password;

      if(password == userID)
      	res.redirect('/profile'); 
    });

router.get('/profile', function(req, res, next) {
  res.render('profile.jade');
});

module.exports = router;
