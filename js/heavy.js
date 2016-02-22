$(function() {
  for (var i=0; i<100 ; i++) {
    $("body").append("(" + i + "), ");
    (function (ii) {
        setTimeout(function () { $("body").append("" + ii + ", ");}, 500 + ii);
    })(i);
  }
});