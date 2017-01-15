import { Meteor } from 'meteor/meteor';
import { Provenanace } from './provenanace.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('provenanace.public', function provenanacePublic() {
 *       let cursor = Provenanace.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Provenanace.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Provenanace
 * @member Publications
 */
Meteor.publish('provenanace.public', function provenanacePublic() {
    let cursor = Provenanace.find({
        userId: { $exists: false },
    }, {
        fields: Provenanace.publicFields
    });

    // return cursor;
});

Meteor.publish('provenanace.private', function provenanacePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Provenanace.find({
        userId: this.userId,
    }, {
        fields: Provenanace.privateFields,
    });

    // return cursor;
});
