import { Meteor } from 'meteor/meteor';
import { Order } from './order.js';

/**
 * If the Order collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Order.find().count() === 0) {
 *       const data = Assets.getText('order.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Order.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Order
 * @member Fixtures
 */
Meteor.startup(() => {

});
