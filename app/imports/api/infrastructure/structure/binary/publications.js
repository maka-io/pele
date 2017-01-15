import { Meteor } from 'meteor/meteor';
import { Binary } from './binary.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('binary.public', function binaryPublic() {
 *       let cursor = Binary.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Binary.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Binary
 * @member Publications
 */
Meteor.publish('binary.public', function binaryPublic() {
    let cursor = Binary.find({
        userId: { $exists: false },
    }, {
        fields: Binary.publicFields
    });

    // return cursor;
});

Meteor.publish('binary.private', function binaryPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Binary.find({
        userId: this.userId,
    }, {
        fields: Binary.privateFields,
    });

    // return cursor;
});
