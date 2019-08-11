'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const Dummy = require("../src/Dummy");



describe('Demo', function() {

	describe('probar el funcionamiento de unit test con mocha', function() {
		it('debe retornar solo true', function() {
			assert(Dummy.getValor(),"Deberia ser true - test dummy");
		});
	});
});
