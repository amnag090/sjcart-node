var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sjcart',{ useNewUrlParser: true });
var products = [
    new Product({
    imagePath:'http://smartprice24.com/wp-content/uploads/2019/01/nokia-9-upcoming-mobile-1-400x250.png',
    title:'Nokia 9 Pureview',
    description: 'description for product askndjasdjskhcjkdsbnjksdbcjkdsbcjhbsdcjlhbdsljckbadsjchsdjcshdclasjcasj',
    price: 50000
}),
new Product({
    imagePath:'https://www.noobie.com/wp-content/uploads/2018/07/iphone-x-iphone-x-apple-mobile-apps-to-download-feature-px-400x250.jpg',
    title:'Iphone X',
    description: 'description for product askndjasdjskhcjkdsbnjksdbcjkdsbcjhbsdcjlhbdsljckbadsjchsdjcshdclasjcasj',
    price: 70000
}),
new Product({
    imagePath:'http://placehold.it/400x250/000/fff',
    title:'one product',
    description: 'description for product askndjasdjskhcjkdsbnjksdbcjkdsbcjhbsdcjlhbdsljckbadsjchsdjcshdclasjcasj',
    price: 13
}),
new Product({
    imagePath:'http://placehold.it/400x250/000/fff',
    title:'one product',
    description: 'description for product askndjasdjskhcjkdsbnjksdbcjkdsbcjhbsdcjlhbdsljckbadsjchsdjcshdclasjcasj',
    price: 13
}),


]
var done = 0;
for(var i = 0;i< products.length;i++){
products[i].save(function (err,res) { 
    done++;
    if(done === products.length){
        exit();
    }
 });
}

function exit(){
    mongoose.disconnect();
}