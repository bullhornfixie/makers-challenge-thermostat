$(document).ready(function() {

  let thermostat = new Thermo();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
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
})