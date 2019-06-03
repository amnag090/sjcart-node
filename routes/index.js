var express = require('express');
var router = express.Router();
var Product = require('../models/product');

var Cart = require('../models/cart');


/* GET home page. */
router.get(['/','/shop'], function(req, res, next) {
   var products = Product.find(function (err,docs){
      // res.send(docs);
    res.render('products/index', { title: 'SjCart', data: docs});

   });
});

router.get('/add-to-card/:id',function(req,res,next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart?req.session.cart:{items:{}});

    Product.findById(productId,function(err,product){
       if(err){
          return res.redirect('/');

       }
       cart.add(product,product.id);
       req.session.cart = cart;
       console.log(req.session.cart);
       res.redirect('/');
    })
})

router.get('/cart',function(req,res,next){
   if(!req.session.cart){
      return res.render('products/cart',{products:null});
   }
   var cart = new Cart(req.session.cart);
   res.render('products/cart',{products:cart.generateArray(),totalAmt:cart.totalAmt})
})

router.get('/checkout',function(req,res,next){
   if(!req.session.cart){
      return res.redirect('/cart');
   }
   var cart = new Cart(req.session.cart);
   res.render('products/checkout',{total:cart.totalAmt});

})
module.exports = router;
