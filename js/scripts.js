$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#fadeToggle").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#slideToggle").slideToggle();
  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light");
  });
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark");
  });

});
