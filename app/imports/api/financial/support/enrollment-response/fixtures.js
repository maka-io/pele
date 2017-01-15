import { Meteor } from 'meteor/meteor';
import { EnrollmentResponse } from './enrollment-response.js';

/**
 * If the EnrollmentResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (EnrollmentResponse.find().count() === 0) {
 *       const data = Assets.getText('enrollment-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           EnrollmentResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.EnrollmentResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
