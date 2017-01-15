import { Meteor } from 'meteor/meteor';
import { Media } from './media.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('media.public', function mediaPublic() {
 *       let cursor = Media.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Media.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Media
 * @member Publications
 */
Meteor.publish('media.public', function mediaPublic() {
    let cursor = Media.find({
        userId: { $exists: false },
    }, {
        fields: Media.publicFields
    });

    // return cursor;
});

Meteor.publish('media.private', function mediaPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Media.find({
        userId: this.userId,
    }, {
        fields: Media.privateFields,
    });

    // return cursor;
});
