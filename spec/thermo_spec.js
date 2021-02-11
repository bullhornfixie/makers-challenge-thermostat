'use strict';

describe('Thermo', function() {
	  var thermo;

	beforeEach(function() { thermo = new Thermo(); 
	  });
	
	it('provides an initial reading of 20 degrees', function() {
		expect(thermo.currentTemp()).toEqual(20)
	})

	it('increases temperatue when up function is called', function() {
		thermo.up()
		expect(thermo.currentTemp()).toEqual(21)
	});

	it('decreases temperature when up function is called', function() { 
		thermo.down()
		expect(thermo.currentTemp()).toEqual(19)
	})

	it("checks that temperature can't be lower than 10 degrees", function() {
		for (var i = 0; i < 10; i++){
			thermo.down()
			console.log(thermo.currentTemp())
		}
		expect(function() { thermo.down();}).toThrow("Minimum temperature reached")
	});

	it("sets the maximum temperature to 25 degrees when power saving mode is on", function() {
		for (var i = 0; i < 5; i++){
			thermo.up()
			console.log(thermo.currentTemp())
		}
		expect(function() { thermo.up();}).toThrow("Maximum temperature reached")
	})

	it("sets the maximum temperature to 32 degrees when power saving mode is off", function(){
		thermo.switch()
		for (var i = 0; i < 12; i++){
			thermo.up()
			console.log(thermo.currentTemp())
		}
		expect(function() { thermo.up();}).toThrow("Maximum temperature reached")
	});

	it("turns off powersaving mode", function() {
		thermo.switch()
		expect(thermo.isPowerSaver()).toBe(false)
		
	})

	it("turns on powersaving made", function() {
		thermo.switch()
		thermo.switch()
		expect(thermo.isPowerSaver()).toBe(true)
	})

});

