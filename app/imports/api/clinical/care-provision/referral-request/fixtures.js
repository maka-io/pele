import { Meteor } from 'meteor/meteor';
import { ReferralRequest } from './referral-request.js';

/**
 * If the ReferralRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ReferralRequest.find().count() === 0) {
 *       const data = Assets.getText('referral-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ReferralRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ReferralRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
