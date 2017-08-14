$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#fadeToggle").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#slideToggle").slideToggle();
  });

  var clickables = ["clickable1" , "clickable2"];
  clickables.forEach(function(clickable){
    $("clickable#" + clickable).click(function() {
      $("#fadeToggle").fadeToggle();
      $("#slideToggle").slideToggle();

    });

  // $("button#light").click(function(){
  //   $("body").removeClass();
  //   $("body").addClass("light");
  // });
  // $("button#dark").click(function(){
  //   $("body").removeClass();
  //   $("body").addClass("dark");
  // });


  var buttons = ["light", "dark"];
  buttons.forEach(function(button){
    $("button#" + button).click(function() {
      $("body").removeClass();
      $("body").addClass(button);
    });
  });

});
