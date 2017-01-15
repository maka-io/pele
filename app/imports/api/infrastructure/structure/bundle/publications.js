import { Meteor } from 'meteor/meteor';
import { Bundle } from './bundle.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('bundle.public', function bundlePublic() {
 *       let cursor = Bundle.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Bundle.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Bundle
 * @member Publications
 */
Meteor.publish('bundle.public', function bundlePublic() {
    let cursor = Bundle.find({
        userId: { $exists: false },
    }, {
        fields: Bundle.publicFields
    });

    // return cursor;
});

Meteor.publish('bundle.private', function bundlePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Bundle.find({
        userId: this.userId,
    }, {
        fields: Bundle.privateFields,
    });

    // return cursor;
});
