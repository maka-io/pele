import { Meteor } from 'meteor/meteor';
import { Patient } from './patient.js';

/**
 * If the Patient collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Patient.find().count() === 0) {
 *       const data = Assets.getText('patient.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Patient.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Patient
 * @member Fixtures
 */
Meteor.startup(() => {

});
