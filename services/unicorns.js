import Promise from 'bluebird';
import _ from 'lodash';

export function get() {
	return new Promise(function (resolve, reject) {
		const unicorns = [{name: 'yo'}, {name: 'matic'}];
		const names = _.map(unicorns, (unicorn) => { 
			return unicorn.name;
		});
		resolve(names);
	});
}

