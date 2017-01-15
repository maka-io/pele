import { Meteor } from 'meteor/meteor';
import { CommunicationRequest } from './communication-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('communication-request.public', function communicationRequestPublic() {
 *       let cursor = CommunicationRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: CommunicationRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.CommunicationRequest
 * @member Publications
 */
Meteor.publish('communication-request.public', function communicationRequestPublic() {
    let cursor = CommunicationRequest.find({
        userId: { $exists: false },
    }, {
        fields: CommunicationRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('communication-request.private', function communicationRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = CommunicationRequest.find({
        userId: this.userId,
    }, {
        fields: CommunicationRequest.privateFields,
    });

    // return cursor;
});
