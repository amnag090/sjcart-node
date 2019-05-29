var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile',isLoggedIn,function(req,res,next){
   res.render('users/profile');
})
router.get('/logout',isLoggedIn ,function(req,res,next){
   req.logOut();
   res.redirect('/shop');
})
router.use('/',isNotLoggedIn,function(req,res,next){
   next();
})
router.get('/signup',function(req,res,next){
    var messages = req.flash('error');
    res.render('/users/signup',{csrfToken:req.csrfToken,messages:messages,hasErrors:messages.length>0});
 });
 
 router.post('/signup',passport.authenticate('local.signup',{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signup',
    failureFlash:true
 }));
 
 
 
 router.get('/signin',function(req,res,next){
    var messages = req.flash('error');
    res.render('users/signin',{csrfToken:req.csrfToken,messages:messages,hasErrors:messages.length>0});
 })
 
 router.post('/signin',passport.authenticate('local.signin',{
    successRedirect:'/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
 }))


 
 module.exports = router;

 function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error','Please Login to access this page');
    res.redirect('/user/signin');
 }

 function isNotLoggedIn(req,res,next){
   if(!req.isAuthenticated()){
       return next();
   }
   req.flash('error','Please Login to access this page');
   res.redirect('/user/signin');
}