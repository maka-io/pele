import { Meteor } from 'meteor/meteor';
import { Claim } from './claim.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('claim.public', function claimPublic() {
 *       let cursor = Claim.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Claim.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Claim
 * @member Publications
 */
Meteor.publish('claim.public', function claimPublic() {
    let cursor = Claim.find({
        userId: { $exists: false },
    }, {
        fields: Claim.publicFields
    });

    // return cursor;
});

Meteor.publish('claim.private', function claimPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Claim.find({
        userId: this.userId,
    }, {
        fields: Claim.privateFields,
    });

    // return cursor;
});
