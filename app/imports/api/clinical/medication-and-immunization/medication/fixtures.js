import { Meteor } from 'meteor/meteor';
import { Medication } from './medication.js';

/**
 * If the Medication collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Medication.find().count() === 0) {
 *       const data = Assets.getText('medication.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Medication.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Medication
 * @member Fixtures
 */
Meteor.startup(() => {

});
