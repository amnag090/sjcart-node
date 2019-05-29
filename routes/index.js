var express = require('express');
var router = express.Router();
var Product = require('../models/product');


/* GET home page. */
router.get(['/','/shop'], function(req, res, next) {
   var products = Product.find(function (err,docs){
      // res.send(docs);
    res.render('products/index', { title: 'SjCart', data: docs});

   });
});


module.exports = router;
