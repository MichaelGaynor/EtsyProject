(function () {

  // console.log('It Works!');
  // console.log($);
  // console.log(_);

var theItems = items;
// console.dir(items);

// _.each(theItems, function(i){
//   // console.log(i);
// })

// var information = _.map(theItems, function(i){
//   return "The Price is " + i.price
// });

var itemTemplate = $('#info-template').text();

var renderTemplate = _.template(itemTemplate);

_.each(theItems.results, function(i){
  console.log(i);
});

}());