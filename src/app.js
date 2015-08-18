thermostat = new Thermostat();

TempColour = function() {
  temperature.style.color = thermostat.energyUsage();
}

var temperature = document.getElementById("temperature");
  temperature.innerHTML = thermostat.showTemp();
  TempColour();

var upTemperature = document.getElementById("increase");
  upTemperature.onclick = function() {
    thermostat.increaseTemp();
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  }

var downTemperature = document.getElementById("decrease");
  downTemperature.onclick = function() {
    thermostat.decreaseTemp();
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  }

var resetTemperature = document.getElementById("reset");
  resetTemperature.onclick = function() {
    thermostat.resetTemp();
    temperature.innerHTML = thermostat.showTemp();
    TempColour();
  }

function powerSaveChange() {
  if (document.getElementById("power_save").checked){
    thermostat.powerSaveOn();
    temperature.innerHTML = thermostat.showTemp();
  } else {
    thermostat.powerSaveOff();
  }
}




 