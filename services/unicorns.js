import Promise from 'bluebird';
import _ from 'lodash';

export function get() {
    return new Promise((resolve) => {
        const unicorns = [{ name: 'yo' }, { name: 'matic' }];
        const names = _.map(unicorns, (unicorn) => unicorn.name);
        resolve(names);
    });
}
