var pageState {
  $("#contacts").hide("fast");
  $("#button").click(function(){
    $("#contacts").show("fast");
    $("#sign_in").hide("fast");
    var click = 1;
  });
  if (click = 1) {
    $("#contacts").show("fast");
    $("#sign_in").hide("fast");
  }
}

$(document).ready(function(){
  pageState(); 
});
