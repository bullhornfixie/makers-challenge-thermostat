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

	
});

