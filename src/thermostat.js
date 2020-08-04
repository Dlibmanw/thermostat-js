function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSaveMode = 'on';

};

Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.up = function() {
    this.temperature += 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMP;
}

Thermostat.prototype.down = function() {
    if (this.isMinimumTemperature()) {
        return;
    } else {
        this.temperature -= 1;
    }
}

Thermostat.prototype.showPowerSaveMode = function() {
    return this.powerSaveMode;
}

Thermostat.prototype.switchPowerSaveModeOff = function() {
    this.powerSaveMode = 'off';
}
