$(document).ready(function() {

  showCity = function(city) {
    $('.city').html(city);
  }

  showWeather = function(weather) {
    $('.weather').html(weather);
  }

  $('.locbtn').click(function() {
    var loc = $('#loccity').val();
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q=" + loc + "&units=metric",function(result){
      var weather = result.list[0].name
      var city = Math.floor(result.list[0].main.temp) + ' °C';
      showCity(city);
      showWeather(weather);
    });
  });

});