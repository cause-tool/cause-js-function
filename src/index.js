'use strict';


function main(step, context, config, input, done) {
	// to be modified in the function
	let output = input;
	let decision = false;

	try {
		eval(`(${config.func})();`);
	} catch (err) {
		done(err);
	}
}


module.exports = {
	main: main,

	defaults: {
		config: {
			func: [
				'function(cb) {',
					'output = "success";',
					'decision = true;',
					'console.log("don\'t forget to call done() in the end!");',
					'done(null, output, decision);',
				'}'
			].join('\n')
		},
		data: {},
		description: ''
	},
};
