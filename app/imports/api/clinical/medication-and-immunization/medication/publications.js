import { Meteor } from 'meteor/meteor';
import { Medication } from './medication.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('medication.public', function medicationPublic() {
 *       let cursor = Medication.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Medication.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Medication
 * @member Publications
 */
Meteor.publish('medication.public', function medicationPublic() {
    let cursor = Medication.find({
        userId: { $exists: false },
    }, {
        fields: Medication.publicFields
    });

    // return cursor;
});

Meteor.publish('medication.private', function medicationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Medication.find({
        userId: this.userId,
    }, {
        fields: Medication.privateFields,
    });

    // return cursor;
});
