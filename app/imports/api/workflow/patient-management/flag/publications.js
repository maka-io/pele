import { Meteor } from 'meteor/meteor';
import { Flag } from './flag.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('flag.public', function flagPublic() {
 *       let cursor = Flag.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Flag.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Flag
 * @member Publications
 */
Meteor.publish('flag.public', function flagPublic() {
    let cursor = Flag.find({
        userId: { $exists: false },
    }, {
        fields: Flag.publicFields
    });

    // return cursor;
});

Meteor.publish('flag.private', function flagPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Flag.find({
        userId: this.userId,
    }, {
        fields: Flag.privateFields,
    });

    // return cursor;
});
