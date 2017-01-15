import { Meteor } from 'meteor/meteor';
import { ClaimResponse } from './claim-response.js';

/**
 * If the ClaimResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ClaimResponse.find().count() === 0) {
 *       const data = Assets.getText('claim-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ClaimResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ClaimResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
