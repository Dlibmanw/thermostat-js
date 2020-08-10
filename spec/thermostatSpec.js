describe('Thermostat', function() {
    let thermostat;
    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temperature with up()', function(){
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases the temperature with down()', function(){
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function(){
        for(var i = 0; i < 11; i++) {
            thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10)
    });

    it('has a power saving mode which is activated by default', function(){
        expect(thermostat.showPowerSaveMode()).toEqual('on')
    });

    it('has a function that can switch off the powerSaveMode', function(){
        thermostat.switchPowerSaveModeOff();
        expect(thermostat.showPowerSaveMode()).toEqual('off')
    });

    it('has a function that can switch on the powerSaveMode', function(){
        thermostat.switchPowerSaveModeOff();
        expect(thermostat.showPowerSaveMode()).toEqual('off')
        thermostat.switchPowerSaveModeOn();
        expect(thermostat.showPowerSaveMode()).toEqual('on')
    });

    describe('when power save mode is on', function(){
        it('has a maximum temp of 25 degrees', function(){
            for(var i = 0; i < 6; i++){
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(25)
        });
    });

    describe('when power save mode is off', function(){
        it('has a maximum temp of 32 degrees', function(){
            thermostat.switchPowerSaveModeOff();
            for(var i = 0; i < 13; i++){
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(32)
        })
    });
});