import { Meteor } from 'meteor/meteor';
import { ReferralRequest } from './referral-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('referral-request.public', function referralRequestPublic() {
 *       let cursor = ReferralRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ReferralRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ReferralRequest
 * @member Publications
 */
Meteor.publish('referral-request.public', function referralRequestPublic() {
    let cursor = ReferralRequest.find({
        userId: { $exists: false },
    }, {
        fields: ReferralRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('referral-request.private', function referralRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ReferralRequest.find({
        userId: this.userId,
    }, {
        fields: ReferralRequest.privateFields,
    });

    // return cursor;
});
