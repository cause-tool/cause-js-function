'use strict';

const assert = require('assert');
const block = require('../');


describe('block', function() {
	it('should call the function', function() {
		function f(cb) {
			output = 'success';
			decision = true;
			done(null, output, decision);
		}

		function done(err, output, decision) {
			assert(output === 'success');
		}

		const config = { func: f.toString() };
		block.main(null, null, config, 'input', done);
	});

	it('should catch errors', function() {
		function done(err, output, decision) {
			assert(!!err);
		}

		const config = { func: 'nonesense!' };
		block.main(null, null, config, null, done);
	});
});
