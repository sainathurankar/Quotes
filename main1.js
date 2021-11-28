var prev = 0;
var quote = "";
var author = "";



function change(quote, author) {
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = "--" + author;
}

$(document).ready(function () {
  $("dt").css("fontSize", "30px");
  $("dl").css("fontSize", "15px");
  
$.get(
  "https://school-buddy-backend-server.herokuapp.com/api/test/qod",
  function (data, status) {
    quote = data.quote;
    author = data.author;
    console.log(quote, author);
    change(quote, author);
  }
);

});
