$(document).ready(function(){
  $("#contacts").hide("fast");
  $("#sign_in").show("fast");
  $("#button").click(function(){
    $("#contacts").show("fast");
    $("#sign_in").hide("fast"); 
    var clicked = 1;
  });
  if (clicked === 1) {
    $("#contacts").show("fast");
    $("#sign_in").hide("fast");  
  }
});
