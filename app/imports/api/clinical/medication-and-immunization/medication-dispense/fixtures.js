import { Meteor } from 'meteor/meteor';
import { MedicationDispense } from './medication-dispense.js';

/**
 * If the MedicationDispense collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (MedicationDispense.find().count() === 0) {
 *       const data = Assets.getText('medication-dispense.json') || [ {} ];
 *       data.forEach((datum) => {
 *           MedicationDispense.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.MedicationDispense
 * @member Fixtures
 */
Meteor.startup(() => {

});
