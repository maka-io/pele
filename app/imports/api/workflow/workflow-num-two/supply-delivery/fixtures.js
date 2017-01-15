import { Meteor } from 'meteor/meteor';
import { SupplyDelivery } from './supply-delivery.js';

/**
 * If the SupplyDelivery collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (SupplyDelivery.find().count() === 0) {
 *       const data = Assets.getText('supply-delivery.json') || [ {} ];
 *       data.forEach((datum) => {
 *           SupplyDelivery.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.SupplyDelivery
 * @member Fixtures
 */
Meteor.startup(() => {

});
