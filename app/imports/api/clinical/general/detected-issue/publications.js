import { Meteor } from 'meteor/meteor';
import { DetectedIssue } from './detected-issue.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('detected-issue.public', function detectedIssuePublic() {
 *       let cursor = DetectedIssue.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DetectedIssue.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DetectedIssue
 * @member Publications
 */
Meteor.publish('detected-issue.public', function detectedIssuePublic() {
    let cursor = DetectedIssue.find({
        userId: { $exists: false },
    }, {
        fields: DetectedIssue.publicFields
    });

    // return cursor;
});

Meteor.publish('detected-issue.private', function detectedIssuePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DetectedIssue.find({
        userId: this.userId,
    }, {
        fields: DetectedIssue.privateFields,
    });

    // return cursor;
});
