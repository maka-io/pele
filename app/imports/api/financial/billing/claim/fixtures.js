import { Meteor } from 'meteor/meteor';
import { Claim } from './claim.js';

/**
 * If the Claim collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Claim.find().count() === 0) {
 *       const data = Assets.getText('claim.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Claim.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Claim
 * @member Fixtures
 */
Meteor.startup(() => {

});
