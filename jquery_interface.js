$(document).ready(function() {
  let thermostat = new Thermo();

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyEfficiency());
}

updateTemperature()

$('#temperature-up').click(function() {
  thermostat.up();
  updateTemperature()
})

$('#temperature-down').click(function() {
  thermostat.down();
  updateTemperature()
})

$('#temperature-reset').click(function() {
  thermostat.reset();
  updateTemperature()
})

$('#powersaving-off').click(function() { 
  thermostat.switch()
  $('#power-saving-status').text('off')
})

$('#powersaving-on').click(function() {
thermostat.switch()
$('#power-saving-status').text('on')
})

})

/* 

Additional feature which grabs current temperature from weather API.

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}

*/
