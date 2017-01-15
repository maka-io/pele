import { Meteor } from 'meteor/meteor';
import { List } from './list.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('list.public', function listPublic() {
 *       let cursor = List.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: List.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.List
 * @member Publications
 */
Meteor.publish('list.public', function listPublic() {
    let cursor = List.find({
        userId: { $exists: false },
    }, {
        fields: List.publicFields
    });

    // return cursor;
});

Meteor.publish('list.private', function listPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = List.find({
        userId: this.userId,
    }, {
        fields: List.privateFields,
    });

    // return cursor;
});
