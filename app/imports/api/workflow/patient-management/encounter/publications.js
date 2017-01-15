import { Meteor } from 'meteor/meteor';
import { Encounter } from './encounter.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('encounter.public', function encounterPublic() {
 *       let cursor = Encounter.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Encounter.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Encounter
 * @member Publications
 */
Meteor.publish('encounter.public', function encounterPublic() {
    let cursor = Encounter.find({
        userId: { $exists: false },
    }, {
        fields: Encounter.publicFields
    });

    // return cursor;
});

Meteor.publish('encounter.private', function encounterPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Encounter.find({
        userId: this.userId,
    }, {
        fields: Encounter.privateFields,
    });

    // return cursor;
});
