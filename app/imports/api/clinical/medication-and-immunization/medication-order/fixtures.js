import { Meteor } from 'meteor/meteor';
import { MedicationOrder } from './medication-order.js';

/**
 * If the MedicationOrder collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (MedicationOrder.find().count() === 0) {
 *       const data = Assets.getText('medication-order.json') || [ {} ];
 *       data.forEach((datum) => {
 *           MedicationOrder.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.MedicationOrder
 * @member Fixtures
 */
Meteor.startup(() => {

});
