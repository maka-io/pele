import { Meteor } from 'meteor/meteor';
import { Appointment } from './appointment.js';

/**
 * If the Appointment collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Appointment.find().count() === 0) {
 *       const data = Assets.getText('appointment.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Appointment.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Appointment
 * @member Fixtures
 */
Meteor.startup(() => {

});
