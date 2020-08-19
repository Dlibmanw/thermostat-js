$(document).ready(function(){
    var thermostat = new Thermostat();
    updateTemperature();
    $('#temperature-up').on('click', function(){
        thermostat.up();
        updateTemperature();
    });
    $('#temperature-down').on('click', function(){
        thermostat.down();
        updateTemperature();
    });

    $('#reset-temperature').click(function(){
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#power-saving-mode-on').click(function(){
        thermostat.switchPowerSaveModeOn();
        $('#power-saving-mode-status').text('On')
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
    };
});

