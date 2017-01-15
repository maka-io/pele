import { Meteor } from 'meteor/meteor';
import { EnrollmentResponse } from './enrollment-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('enrollment-response.public', function enrollmentResponsePublic() {
 *       let cursor = EnrollmentResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: EnrollmentResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.EnrollmentResponse
 * @member Publications
 */
Meteor.publish('enrollment-response.public', function enrollmentResponsePublic() {
    let cursor = EnrollmentResponse.find({
        userId: { $exists: false },
    }, {
        fields: EnrollmentResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('enrollment-response.private', function enrollmentResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = EnrollmentResponse.find({
        userId: this.userId,
    }, {
        fields: EnrollmentResponse.privateFields,
    });

    // return cursor;
});
