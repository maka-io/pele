import { Meteor } from 'meteor/meteor';
import { Location } from './location.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('location.public', function locationPublic() {
 *       let cursor = Location.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Location.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Location
 * @member Publications
 */
Meteor.publish('location.public', function locationPublic() {
    let cursor = Location.find({
        userId: { $exists: false },
    }, {
        fields: Location.publicFields
    });

    // return cursor;
});

Meteor.publish('location.private', function locationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Location.find({
        userId: this.userId,
    }, {
        fields: Location.privateFields,
    });

    // return cursor;
});
