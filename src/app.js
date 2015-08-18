thermostat = new Thermostat();

TempColour = function() {
  temperature.style.color = thermostat.energyUsage();
}

$(document).ready(function() {
  $("#temperature").show(function() {
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  })
  $("#increase").click(function() {
    thermostat.increaseTemp();
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  })
  $("#decrease").click(function() {
    thermostat.decreaseTemp();
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  })
  $("#reset").click(function() {
    thermostat.resetTemp();
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  })
  $('#power_save').click(function() {
    powerSaveChange();
  })
  
  function powerSaveChange() {
    if ($("#power_save").is(':checked') ) {
      thermostat.powerSaveOn();
      temperature.innerHTML = thermostat.showTemp();
    } else {
      thermostat.powerSaveOff();
    }
  }
})


 