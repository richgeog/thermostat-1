var weather;

// $(document).ready(function(){
//   $.getJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric",function(result){
//     weather = result;
//     alert("City: "+result.list[0].name);
//     alert("Weather: "+ result.list[0].main.temp);
//     });
// });

$(document).ready(function() {
  $('.locbtn').click(function() {
    var loc = $('.city').val();
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q=" + loc + "&units=metric",function(result){
      weather = result;
      alert("City: "+result.list[0].name);
      alert("Weather: "+ Math.floor(result.list[0].main.temp));
      });
    });
});