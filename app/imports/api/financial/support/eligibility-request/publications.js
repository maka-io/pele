import { Meteor } from 'meteor/meteor';
import { EligibilityRequest } from './eligibility-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('eligibility-request.public', function eligibilityRequestPublic() {
 *       let cursor = EligibilityRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: EligibilityRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.EligibilityRequest
 * @member Publications
 */
Meteor.publish('eligibility-request.public', function eligibilityRequestPublic() {
    let cursor = EligibilityRequest.find({
        userId: { $exists: false },
    }, {
        fields: EligibilityRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('eligibility-request.private', function eligibilityRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = EligibilityRequest.find({
        userId: this.userId,
    }, {
        fields: EligibilityRequest.privateFields,
    });

    // return cursor;
});
