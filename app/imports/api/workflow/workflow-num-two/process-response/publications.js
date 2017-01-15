import { Meteor } from 'meteor/meteor';
import { ProcessResponse } from './process-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('process-response.public', function processResponsePublic() {
 *       let cursor = ProcessResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ProcessResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ProcessResponse
 * @member Publications
 */
Meteor.publish('process-response.public', function processResponsePublic() {
    let cursor = ProcessResponse.find({
        userId: { $exists: false },
    }, {
        fields: ProcessResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('process-response.private', function processResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ProcessResponse.find({
        userId: this.userId,
    }, {
        fields: ProcessResponse.privateFields,
    });

    // return cursor;
});
