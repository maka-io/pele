import { Meteor } from 'meteor/meteor';
import { PaymentNotice } from './payment-notice.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('payment-notice.public', function paymentNoticePublic() {
 *       let cursor = PaymentNotice.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: PaymentNotice.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.PaymentNotice
 * @member Publications
 */
Meteor.publish('payment-notice.public', function paymentNoticePublic() {
    let cursor = PaymentNotice.find({
        userId: { $exists: false },
    }, {
        fields: PaymentNotice.publicFields
    });

    // return cursor;
});

Meteor.publish('payment-notice.private', function paymentNoticePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = PaymentNotice.find({
        userId: this.userId,
    }, {
        fields: PaymentNotice.privateFields,
    });

    // return cursor;
});
