var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
   var products = Product.find(function (err,docs){
      // res.send(docs);
    res.render('products/index', { title: 'SjCart', data: docs});

   });
});

router.get('/signup',function(req,res,next){
   var messages = req.flash('error');
   res.render('users/signup',{csrfToken:req.csrfToken,messages:messages,hasErrors:messages.length>0});
});

router.post('/signup',passport.authenticate('local.signup',{
   successRedirect:'/profile',
   failureRedirect:'/signup',
   failureFlash:true
}));

router.get('/profile',function(req,res,next){
   res.render('users/profile');
})
module.exports = router;
