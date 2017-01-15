import { Meteor } from 'meteor/meteor';
import { NutritionOrder } from './nutrition-order.js';

/**
 * If the NutritionOrder collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (NutritionOrder.find().count() === 0) {
 *       const data = Assets.getText('nutrition-order.json') || [ {} ];
 *       data.forEach((datum) => {
 *           NutritionOrder.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.NutritionOrder
 * @member Fixtures
 */
Meteor.startup(() => {

});
