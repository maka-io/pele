import { Meteor } from 'meteor/meteor';
import { Contract } from './contract.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('contract.public', function contractPublic() {
 *       let cursor = Contract.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Contract.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Contract
 * @member Publications
 */
Meteor.publish('contract.public', function contractPublic() {
    let cursor = Contract.find({
        userId: { $exists: false },
    }, {
        fields: Contract.publicFields
    });

    // return cursor;
});

Meteor.publish('contract.private', function contractPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Contract.find({
        userId: this.userId,
    }, {
        fields: Contract.privateFields,
    });

    // return cursor;
});
