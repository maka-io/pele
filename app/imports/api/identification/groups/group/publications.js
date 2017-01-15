import { Meteor } from 'meteor/meteor';
import { Group } from './group.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('group.public', function groupPublic() {
 *       let cursor = Group.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Group.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Group
 * @member Publications
 */
Meteor.publish('group.public', function groupPublic() {
    let cursor = Group.find({
        userId: { $exists: false },
    }, {
        fields: Group.publicFields
    });

    // return cursor;
});

Meteor.publish('group.private', function groupPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Group.find({
        userId: this.userId,
    }, {
        fields: Group.privateFields,
    });

    // return cursor;
});
