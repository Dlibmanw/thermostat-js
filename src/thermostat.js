function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.powerSaveMode = 'on';

};

Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.up = function() {
    if (this.isMaximumTemperature()){
        return;
    }
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

Thermostat.prototype.switchPowerSaveModeOn = function() {
    this.powerSaveMode = 'on'
}

Thermostat.prototype.isMaximumTemperature = function() {
    if (this.showPowerSaveMode() === 'on'){
        return this.temperature === this.MAX_TEMP_PSM_ON
    } else {
        return this.temperature === this.MAX_TEMP_PSM_OFF
    }
}

Thermostat.prototype.resetTemperature = function() {
    this.temperature = 20;
}

