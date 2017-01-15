import { Meteor } from 'meteor/meteor';
import { EligibilityResponse } from './eligibility-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('eligibility-response.public', function eligibilityResponsePublic() {
 *       let cursor = EligibilityResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: EligibilityResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.EligibilityResponse
 * @member Publications
 */
Meteor.publish('eligibility-response.public', function eligibilityResponsePublic() {
    let cursor = EligibilityResponse.find({
        userId: { $exists: false },
    }, {
        fields: EligibilityResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('eligibility-response.private', function eligibilityResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = EligibilityResponse.find({
        userId: this.userId,
    }, {
        fields: EligibilityResponse.privateFields,
    });

    // return cursor;
});
