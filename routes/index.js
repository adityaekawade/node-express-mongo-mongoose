var express = require('express');
var router = express.Router();
var Content = require('../models/content');


/* GET home page. */
router.get('/', function(req, res, next) {
    Content.find(function(err, content) {
      res.render('index', { title: 'Node Project', contents: content });
  });
});

module.exports = router;
