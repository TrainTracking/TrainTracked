$(document).ready(function(){
  $("#contacts").hide("fast");
  $("#sign_in").show("fast");
  var clicked = 0;
  $("#button").click(function(){
    $("#contacts").show("fast");
    $("#sign_in").hide("fast"); 
    clicked = 1;
  });
  if (clicked = 1) {
    $("#contacts").show("fast");
    $("#sign_in").hide("fast");  
  }
});
