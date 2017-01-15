import { Meteor } from 'meteor/meteor';
import { MedicationAdministration } from './medication-administration.js';

/**
 * If the MedicationAdministration collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (MedicationAdministration.find().count() === 0) {
 *       const data = Assets.getText('medication-administration.json') || [ {} ];
 *       data.forEach((datum) => {
 *           MedicationAdministration.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.MedicationAdministration
 * @member Fixtures
 */
Meteor.startup(() => {

});
