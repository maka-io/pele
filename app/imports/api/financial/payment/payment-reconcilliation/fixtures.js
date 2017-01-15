import { Meteor } from 'meteor/meteor';
import { PaymentReconcilliation } from './payment-reconcilliation.js';

/**
 * If the PaymentReconcilliation collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (PaymentReconcilliation.find().count() === 0) {
 *       const data = Assets.getText('payment-reconcilliation.json') || [ {} ];
 *       data.forEach((datum) => {
 *           PaymentReconcilliation.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.PaymentReconcilliation
 * @member Fixtures
 */
Meteor.startup(() => {

});
