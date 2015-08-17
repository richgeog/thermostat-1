var Thermostat = function() {
  this.temperature = Thermostat.defaultTemp
  this.minimumTemp = 10
  this.maximumTemp = 25
  this.isPowerSaveOn = true
};

Thermostat.defaultTemp = 20;


Thermostat.prototype.increaseTemp = function(degrees) {
  return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  return this.temperature -= degrees;
};

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
};

Thermostat.prototype.powerSaveOn = function() {
  if (this.temperature > 25) {this.temperature = 25};
  this.maximumTemp = 25;
  return this.isPowerSaverOn = true;
};

Thermostat.prototype.powerSaveOff = function() {
  this.maximumTemp = 32;
  return this.isPowerSaverOn = false;
};
