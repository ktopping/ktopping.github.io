for (var i=0; i<10 ; i++) {
  setTimeout(function () { $("body").append("" + i + "<br>");}, 500 + i);
}
