var prev = 0;
var quote = "";
var author = "";



function change(quote, author) {
  $("#quoteDisp").css("visibility", "visible");
  $("dt").css("fontSize", "30px");
  $("dl").css("fontSize", "15px");
  $(".loader").css("visibility", "hidden");
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = "--" + author;
}

$(document).ready(function () {
$.get("https://api.goprogram.ai/inspiration", function (data, status) {
  quote = data.quote;
  author = data.author;
  // console.log(quote, author);
  change(quote, author);
});

});
