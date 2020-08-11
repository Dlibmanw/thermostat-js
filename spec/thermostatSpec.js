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
            for (var i = 0; i < 6; i++){
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(25)
        });
    });

    describe('when power save mode is off', function(){
        it('has a maximum temp of 32 degrees', function(){
            thermostat.switchPowerSaveModeOff();
            for (var i = 0; i < 13; i++){
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(32)
        })
    });

    it('can be reset to the default temperature', function(){
        for ( var i = 0; i < 5; i++){
            thermostat.up();
        }
        thermostat.resetTemperature()
        expect(thermostat.getCurrentTemperature()).toEqual(20)
    });

    describe('display the different usage levels', function(){
        describe('when the temperture is lower than 18 degrees', function(){
            it('displayes a low-usage message', function(){
                for ( var i = 0; i < 3; i++){
                    thermostat.down();
                }
                expect(thermostat.showEnergyUsage()).toEqual('low-usage')
            })
        })

        describe('when the temperture is between 18-25 degrees', function(){
            it('displayes a medium-usage message', function(){
                expect(thermostat.showEnergyUsage()).toEqual('medium-usage')
            })
        })

        describe('when the temperture is anything else', function(){
            it('displayes a high-usage message', function(){
                for ( var i = 0; i < 6; i++){
                    thermostat.up();
                }
                expect(thermostat.showEnergyUsage()).toEqual('high-usage')
            })
        })
    })
});