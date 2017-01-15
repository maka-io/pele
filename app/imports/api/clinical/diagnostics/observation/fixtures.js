import { Meteor } from 'meteor/meteor';
import { Observation } from './observation.js';

/**
 * If the Observation collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Observation.find().count() === 0) {
 *       const data = Assets.getText('observation.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Observation.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Observation
 * @member Fixtures
 */
Meteor.startup(() => {

});
