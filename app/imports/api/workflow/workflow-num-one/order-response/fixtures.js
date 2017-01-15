import { Meteor } from 'meteor/meteor';
import { OrderResponse } from './order-response.js';

/**
 * If the OrderResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (OrderResponse.find().count() === 0) {
 *       const data = Assets.getText('order-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           OrderResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.OrderResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
