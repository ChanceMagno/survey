$(document).ready(function(){
  $("form#getName").submit(function(event) {
    var getName = $("input#name").val();
    var getConsole = $("#gamingconsole").val();
    var getMusic = $("input:radio[name=music]:checked").val();
    var favoriteColor = $("#color").val();
    $(".userName").text(getName);
    $(".userConsole").text(getConsole);
    $(".userMusic").text(getMusic);
    $(".userColor").text(favoriteColor);
    event.preventDefault();
  });
});
