describe('Thermostat', function() {
    let thermostat;
    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it('start at 20 degrees', function(){
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    })
});