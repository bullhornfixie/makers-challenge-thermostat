'use strict';

describe('Thermo', function() {
	  var thermo;

	beforeEach(function() { thermo = new Thermo(); 
	  });
	
	it('provides an initial reading of 20 degrees', function() {
		thermo.temperature()
		expect(thermo.temperature()).toEqual(20)
	})
	
});

