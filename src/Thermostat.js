var Thermostat = function() {
  this.temperature = Thermostat.defaultTemp
  this.minimumTemp = 10
  this.maximumTemp = 25
  this.isPowerSaveOn = true
};

Thermostat.defaultTemp = 20;


Thermostat.prototype.increaseTemp = function(degrees) {
  var temp = this.temperature += degrees
  this.controlMinMaxTemp(temp)
  return temp
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  var temp = this.temperature -= degrees
  this.controlMinMaxTemp(temp)
  return temp
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

Thermostat.prototype.controlMinMaxTemp = function(temp) {
  if (temp < this.minimumTemp) {
    throw Error('Temperature cannot go below ' + this.minimumTemp + '.');
  }
  else if (temp > this.maximumTemp) {
    throw Error('Temperature cannot go above ' + this.maximumTemp + '.');
  }
};
