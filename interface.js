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