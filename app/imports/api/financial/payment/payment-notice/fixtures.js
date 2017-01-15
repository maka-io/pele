import { Meteor } from 'meteor/meteor';
import { PaymentNotice } from './payment-notice.js';

/**
 * If the PaymentNotice collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (PaymentNotice.find().count() === 0) {
 *       const data = Assets.getText('payment-notice.json') || [ {} ];
 *       data.forEach((datum) => {
 *           PaymentNotice.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.PaymentNotice
 * @member Fixtures
 */
Meteor.startup(() => {

});
