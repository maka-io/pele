import { Meteor } from 'meteor/meteor';
import { Practitioner } from './practitioner.js';

/**
 * If the Practitioner collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Practitioner.find().count() === 0) {
 *       const data = Assets.getText('practitioner.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Practitioner.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Practitioner
 * @member Fixtures
 */
Meteor.startup(() => {

});
