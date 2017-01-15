import { Meteor } from 'meteor/meteor';
import { Parameters } from './parameters.js';

/**
 * If the Parameters collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Parameters.find().count() === 0) {
 *       const data = Assets.getText('parameters.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Parameters.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Parameters
 * @member Fixtures
 */
Meteor.startup(() => {

});
