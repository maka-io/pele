import { Meteor } from 'meteor/meteor';
import { Order } from './order.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('order.public', function orderPublic() {
 *       let cursor = Order.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Order.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Order
 * @member Publications
 */
Meteor.publish('order.public', function orderPublic() {
    let cursor = Order.find({
        userId: { $exists: false },
    }, {
        fields: Order.publicFields
    });

    // return cursor;
});

Meteor.publish('order.private', function orderPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Order.find({
        userId: this.userId,
    }, {
        fields: Order.privateFields,
    });

    // return cursor;
});
