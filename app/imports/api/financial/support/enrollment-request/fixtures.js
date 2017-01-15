import { Meteor } from 'meteor/meteor';
import { EnrollmentRequest } from './enrollment-request.js';

/**
 * If the EnrollmentRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (EnrollmentRequest.find().count() === 0) {
 *       const data = Assets.getText('enrollment-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           EnrollmentRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.EnrollmentRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
