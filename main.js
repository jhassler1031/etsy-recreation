
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

  // var sidebarSource = document.getElementById("sidebar-template").innerHTML;
  // var sidebarTemplate = Handlebars.compile(sidebarSource);
  // var sidebarContext = res.
  let $sideBar = document.querySelector(".side-bar");
  let results = res.results
  for (let y = 0; y < results.length; y++) {
    let tags = results[y].tags;
    console.log(tags);
    for (let x = 0; x < tags.length; x++) {
      console.log(tags[x]);
      // $sideBar.append(`<a>${tags[x]})</a>`);
    }
  }

}
