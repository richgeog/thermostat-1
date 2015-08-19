var weather;

$(document).ready(function(){
  $.getJSON("https://api.openweathermap.org/data/2.5/find?q=London&units=metric",function(result){
    // weather = result;
    alert("City: "+result.city.name);
    alert("Weather: "+ result.main.temp);
    });
});