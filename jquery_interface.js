$(document).ready(function() {
  let thermostat = new Thermo();
/* Code inside $(document).ready() will only run once the page
Document Object Model(DOM) is ready for JavaScript code to execute.
This function sets the status of the DOM to ready.
*/

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  // #temperature is the id tag in HTML and passed an argument
  $('#temperature').attr('class', thermostat.energyEfficiency());
}

updateTemperature()
// this must be called to display this.temperature on page load

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
  $('.screen').removeClass('eco-on')
  $('#power-saving-status').text('off')
})

$('#powersaving-on').click(function() {
  thermostat.switch()
  $('.screen').addClass('eco-on')
  /* create and add a new class eco-on to .screen (chaining). 
  when powersaving-on is clicked it calls .screen.eco-on in CSS
  and changes the color. 
  */
  $('#power-saving-status').text('on')
})

})

