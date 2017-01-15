import { Meteor } from 'meteor/meteor';
import { FamilyMemberHistory } from './family-member-history.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('family-member-history.public', function familyMemberHistoryPublic() {
 *       let cursor = FamilyMemberHistory.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: FamilyMemberHistory.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.FamilyMemberHistory
 * @member Publications
 */
Meteor.publish('family-member-history.public', function familyMemberHistoryPublic() {
    let cursor = FamilyMemberHistory.find({
        userId: { $exists: false },
    }, {
        fields: FamilyMemberHistory.publicFields
    });

    // return cursor;
});

Meteor.publish('family-member-history.private', function familyMemberHistoryPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = FamilyMemberHistory.find({
        userId: this.userId,
    }, {
        fields: FamilyMemberHistory.privateFields,
    });

    // return cursor;
});
