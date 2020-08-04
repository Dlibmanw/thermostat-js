describe('Thermostat', function() {
    let thermostat;
    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temperature with up()', function(){
        expect(thermostat.up()).toEqual(21);
    });
});