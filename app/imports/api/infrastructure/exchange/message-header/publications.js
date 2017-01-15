import { Meteor } from 'meteor/meteor';
import { MessageHeader } from './message-header.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('message-header.public', function messageHeaderPublic() {
 *       let cursor = MessageHeader.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: MessageHeader.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.MessageHeader
 * @member Publications
 */
Meteor.publish('message-header.public', function messageHeaderPublic() {
    let cursor = MessageHeader.find({
        userId: { $exists: false },
    }, {
        fields: MessageHeader.publicFields
    });

    // return cursor;
});

Meteor.publish('message-header.private', function messageHeaderPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = MessageHeader.find({
        userId: this.userId,
    }, {
        fields: MessageHeader.privateFields,
    });

    // return cursor;
});
