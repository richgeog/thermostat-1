var Thermostat = function() {
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this.minimumTemp = 10;
  this.maximumTemp = 25;
  this.isPowerSaveOn = true;
};


Thermostat.prototype.showTemp = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  var temp = this.temperature += 1
  this.controlMinMaxTemp(temp)
  return temp
};

Thermostat.prototype.decreaseTemp = function() {
  var temp = this.temperature -= 1
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


Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "green";
  } else if (this.temperature > 25) {
    return "red";
  } else {
  return "yellow";
  }
};
