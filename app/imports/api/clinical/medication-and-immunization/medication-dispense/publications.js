import { Meteor } from 'meteor/meteor';
import { MedicationDispense } from './medication-dispense.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('medication-dispense.public', function medicationDispensePublic() {
 *       let cursor = MedicationDispense.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: MedicationDispense.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.MedicationDispense
 * @member Publications
 */
Meteor.publish('medication-dispense.public', function medicationDispensePublic() {
    let cursor = MedicationDispense.find({
        userId: { $exists: false },
    }, {
        fields: MedicationDispense.publicFields
    });

    // return cursor;
});

Meteor.publish('medication-dispense.private', function medicationDispensePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = MedicationDispense.find({
        userId: this.userId,
    }, {
        fields: MedicationDispense.privateFields,
    });

    // return cursor;
});
