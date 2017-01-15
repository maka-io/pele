import { Meteor } from 'meteor/meteor';
import { EligibilityResponse } from './eligibility-response.js';

/**
 * If the EligibilityResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (EligibilityResponse.find().count() === 0) {
 *       const data = Assets.getText('eligibility-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           EligibilityResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.EligibilityResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
