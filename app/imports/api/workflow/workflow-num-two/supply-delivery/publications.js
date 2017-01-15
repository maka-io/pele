import { Meteor } from 'meteor/meteor';
import { SupplyDelivery } from './supply-delivery.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('supply-delivery.public', function supplyDeliveryPublic() {
 *       let cursor = SupplyDelivery.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: SupplyDelivery.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.SupplyDelivery
 * @member Publications
 */
Meteor.publish('supply-delivery.public', function supplyDeliveryPublic() {
    let cursor = SupplyDelivery.find({
        userId: { $exists: false },
    }, {
        fields: SupplyDelivery.publicFields
    });

    // return cursor;
});

Meteor.publish('supply-delivery.private', function supplyDeliveryPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = SupplyDelivery.find({
        userId: this.userId,
    }, {
        fields: SupplyDelivery.privateFields,
    });

    // return cursor;
});
