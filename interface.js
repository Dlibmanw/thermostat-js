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

    $('#power-saving-mode-off').on('click', function(){
        thermostat.switchPowerSaveModeOff();
        $('#power-saving-mode-status').text('Off')
        updateTemperature();
    });

   $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8710c8026aea53d796de4beedaf617c6&units=metric', function(data){$('#current-temperature').text(data.main.temp)});

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.showEnergyUsage());
    };
});

