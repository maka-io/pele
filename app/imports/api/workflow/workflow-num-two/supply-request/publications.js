import { Meteor } from 'meteor/meteor';
import { SupplyRequest } from './supply-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('supply-request.public', function supplyRequestPublic() {
 *       let cursor = SupplyRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: SupplyRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.SupplyRequest
 * @member Publications
 */
Meteor.publish('supply-request.public', function supplyRequestPublic() {
    let cursor = SupplyRequest.find({
        userId: { $exists: false },
    }, {
        fields: SupplyRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('supply-request.private', function supplyRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = SupplyRequest.find({
        userId: this.userId,
    }, {
        fields: SupplyRequest.privateFields,
    });

    // return cursor;
});
