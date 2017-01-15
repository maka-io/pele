import { Meteor } from 'meteor/meteor';
import { OrderResponse } from './order-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('order-response.public', function orderResponsePublic() {
 *       let cursor = OrderResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: OrderResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.OrderResponse
 * @member Publications
 */
Meteor.publish('order-response.public', function orderResponsePublic() {
    let cursor = OrderResponse.find({
        userId: { $exists: false },
    }, {
        fields: OrderResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('order-response.private', function orderResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = OrderResponse.find({
        userId: this.userId,
    }, {
        fields: OrderResponse.privateFields,
    });

    // return cursor;
});
