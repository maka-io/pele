import { Meteor } from 'meteor/meteor';
import { Conformance } from './conformance.js';

/**
 * If the Conformance collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Conformance.find().count() === 0) {
 *       const data = Assets.getText('conformance.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Conformance.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Conformance
 * @member Fixtures
 */
Meteor.startup(() => {

});
