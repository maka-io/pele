import { Meteor } from 'meteor/meteor';
import { Basic } from './basic.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('basic.public', function basicPublic() {
 *       let cursor = Basic.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Basic.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Basic
 * @member Publications
 */
Meteor.publish('basic.public', function basicPublic() {
    let cursor = Basic.find({
        userId: { $exists: false },
    }, {
        fields: Basic.publicFields
    });

    // return cursor;
});

Meteor.publish('basic.private', function basicPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Basic.find({
        userId: this.userId,
    }, {
        fields: Basic.privateFields,
    });

    // return cursor;
});
