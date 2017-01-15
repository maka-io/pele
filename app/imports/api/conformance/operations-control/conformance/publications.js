import { Meteor } from 'meteor/meteor';
import { Conformance } from './conformance.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('conformance.public', function conformancePublic() {
 *       let cursor = Conformance.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Conformance.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Conformance
 * @member Publications
 */
Meteor.publish('conformance.public', function conformancePublic() {
    let cursor = Conformance.find({
        userId: { $exists: false },
    }, {
        fields: Conformance.publicFields
    });

    // return cursor;
});

Meteor.publish('conformance.private', function conformancePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Conformance.find({
        userId: this.userId,
    }, {
        fields: Conformance.privateFields,
    });

    // return cursor;
});
