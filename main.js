
//Make the ajax call to get the data
let baseURL = "https://api.etsy.com/v2/listings/active.js"
//API key being pulled in from key.js
let keyword = "bearded%20dragon";

$.ajax({
    url: `${baseURL}?api_key=${apiKey}&keywords=${keyword}&includes=Images,Shop&limit=25`,
    type: "GET",
    dataType: "jsonp",
    success: getResults
});

// Function to be used on ajax success- doing it this way bc of running async
function getResults(res) {
  console.log(res);

  // Handlebar template for tiles ==============================================
  var source = document.getElementById("tile-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = res;
  var html = template(context);
  $(".tiles-row").html(html);

}
