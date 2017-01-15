import { Meteor } from 'meteor/meteor';
import { PaymentReconcilliation } from './payment-reconcilliation.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('payment-reconcilliation.public', function paymentReconcilliationPublic() {
 *       let cursor = PaymentReconcilliation.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: PaymentReconcilliation.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.PaymentReconcilliation
 * @member Publications
 */
Meteor.publish('payment-reconcilliation.public', function paymentReconcilliationPublic() {
    let cursor = PaymentReconcilliation.find({
        userId: { $exists: false },
    }, {
        fields: PaymentReconcilliation.publicFields
    });

    // return cursor;
});

Meteor.publish('payment-reconcilliation.private', function paymentReconcilliationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = PaymentReconcilliation.find({
        userId: this.userId,
    }, {
        fields: PaymentReconcilliation.privateFields,
    });

    // return cursor;
});
