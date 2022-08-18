var express = require('express');
var router = express.Router();

var FRONTEND_URL = "http://localhost:3000";

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   else
//     // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
//     res.redirect(`${FRONTEND_URL}/`);
//   }

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.send(200);
});

module.exports = router;
