import { Meteor } from 'meteor/meteor';
import { SupplyRequest } from './supply-request.js';

/**
 * If the SupplyRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (SupplyRequest.find().count() === 0) {
 *       const data = Assets.getText('supply-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           SupplyRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.SupplyRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
