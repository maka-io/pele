import { Meteor } from 'meteor/meteor';
import { EligibilityRequest } from './eligibility-request.js';

/**
 * If the EligibilityRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (EligibilityRequest.find().count() === 0) {
 *       const data = Assets.getText('eligibility-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           EligibilityRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.EligibilityRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
