var prev = 0;

var quotes1 = [];
var author = [];
$.get(
  "https://school-buddy-backend-server.herokuapp.com/api/test/quotes",
  function (data, status) {
    for (var i = 0; i < data.length; i++) {
      quotes1.push(data[i].quote);
      author.push(data[i].author);
    }
    // console.log(quotes1, author);
    change(quotes1, author);
  }
);

$("#quotebutton").on("click", update);
$("dl").css("fontSize", "15px");
$("dt").css("fontSize", "30px");

function update() {
  change(quotes1, author);
//   createButton();
}

function change(quotes1,author) {
     
  var num = Math.floor(Math.random() * quotes1.length);
  while (num == prev) {
    num = Math.floor(Math.random() * quotes1.length);
  }
  prev = num;       
  var quotedisplay = quotes1[num];


  tweettext = quotedisplay + " --" + author[num];
  document.getElementById("quote").innerHTML = quotedisplay;
  document.getElementById("author").innerHTML = "--" + author[num];
}

$(document).ready(function () {
    
  var tweettext = "";

  $("dt").css("fontSize", "30px");
  $("dl").css("fontSize", "15px");


});
