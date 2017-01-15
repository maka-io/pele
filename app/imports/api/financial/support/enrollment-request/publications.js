import { Meteor } from 'meteor/meteor';
import { EnrollmentRequest } from './enrollment-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('enrollment-request.public', function enrollmentRequestPublic() {
 *       let cursor = EnrollmentRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: EnrollmentRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.EnrollmentRequest
 * @member Publications
 */
Meteor.publish('enrollment-request.public', function enrollmentRequestPublic() {
    let cursor = EnrollmentRequest.find({
        userId: { $exists: false },
    }, {
        fields: EnrollmentRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('enrollment-request.private', function enrollmentRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = EnrollmentRequest.find({
        userId: this.userId,
    }, {
        fields: EnrollmentRequest.privateFields,
    });

    // return cursor;
});
