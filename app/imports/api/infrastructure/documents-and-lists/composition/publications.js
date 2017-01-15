import { Meteor } from 'meteor/meteor';
import { Composition } from './composition.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('composition.public', function compositionPublic() {
 *       let cursor = Composition.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Composition.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Composition
 * @member Publications
 */
Meteor.publish('composition.public', function compositionPublic() {
    let cursor = Composition.find({
        userId: { $exists: false },
    }, {
        fields: Composition.publicFields
    });

    // return cursor;
});

Meteor.publish('composition.private', function compositionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Composition.find({
        userId: this.userId,
    }, {
        fields: Composition.privateFields,
    });

    // return cursor;
});
