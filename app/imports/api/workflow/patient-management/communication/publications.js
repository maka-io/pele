import { Meteor } from 'meteor/meteor';
import { Communication } from './communication.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('communication.public', function communicationPublic() {
 *       let cursor = Communication.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Communication.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Communication
 * @member Publications
 */
Meteor.publish('communication.public', function communicationPublic() {
    let cursor = Communication.find({
        userId: { $exists: false },
    }, {
        fields: Communication.publicFields
    });

    // return cursor;
});

Meteor.publish('communication.private', function communicationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Communication.find({
        userId: this.userId,
    }, {
        fields: Communication.privateFields,
    });

    // return cursor;
});
