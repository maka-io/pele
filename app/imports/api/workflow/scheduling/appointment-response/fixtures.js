import { Meteor } from 'meteor/meteor';
import { AppointmentResponse } from './appointment-response.js';

/**
 * If the AppointmentResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (AppointmentResponse.find().count() === 0) {
 *       const data = Assets.getText('appointment-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           AppointmentResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.AppointmentResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
