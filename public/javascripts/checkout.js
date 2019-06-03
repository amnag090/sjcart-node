var stripe = Stripe('pk_test_aAMEWCaq4fGxMrPjcCdWoQor00gDuodgeY');
var form = $('#checkoutForm');

$('#checkoutForm').submit(function (e) { 
    e.preventDefault();
    console.log($(this));
    
});