import { Meteor } from 'meteor/meteor';
import { ProcessRequest } from './process-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('process-request.public', function processRequestPublic() {
 *       let cursor = ProcessRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ProcessRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ProcessRequest
 * @member Publications
 */
Meteor.publish('process-request.public', function processRequestPublic() {
    let cursor = ProcessRequest.find({
        userId: { $exists: false },
    }, {
        fields: ProcessRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('process-request.private', function processRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ProcessRequest.find({
        userId: this.userId,
    }, {
        fields: ProcessRequest.privateFields,
    });

    // return cursor;
});
