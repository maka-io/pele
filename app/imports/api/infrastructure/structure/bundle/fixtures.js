import { Meteor } from 'meteor/meteor';
import { Bundle } from './bundle.js';

/**
 * If the Bundle collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Bundle.find().count() === 0) {
 *       const data = Assets.getText('bundle.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Bundle.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Bundle
 * @member Fixtures
 */
Meteor.startup(() => {

});
