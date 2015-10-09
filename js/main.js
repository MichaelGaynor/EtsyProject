(function () {

  // console.log('It Works!');
  // console.log($);
  // console.log(_);

var theItems = etsy;
// console.dir(etsy);

// _.each(theItems, function(i){
//   // console.log(i);
// })

// var information = _.map(theItems, function(i){
//   return "The Price is " + i.price
// });

//TEMPLATE STRING
var itemTemplate = $('#info-template').text();

//MAKE TEMPLATE FUNCTION
var renderTemplate = _.template(itemTemplate);


_.each(etsy.results, function(i){

var freshHTML = renderTemplate(i);

$('#TheScript').append(freshHTML);

});


}());