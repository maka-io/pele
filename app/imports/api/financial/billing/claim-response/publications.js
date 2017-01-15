import { Meteor } from 'meteor/meteor';
import { ClaimResponse } from './claim-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('claim-response.public', function claimResponsePublic() {
 *       let cursor = ClaimResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ClaimResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ClaimResponse
 * @member Publications
 */
Meteor.publish('claim-response.public', function claimResponsePublic() {
    let cursor = ClaimResponse.find({
        userId: { $exists: false },
    }, {
        fields: ClaimResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('claim-response.private', function claimResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ClaimResponse.find({
        userId: this.userId,
    }, {
        fields: ClaimResponse.privateFields,
    });

    // return cursor;
});
