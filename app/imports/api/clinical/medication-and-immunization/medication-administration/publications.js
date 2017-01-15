import { Meteor } from 'meteor/meteor';
import { MedicationAdministration } from './medication-administration.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('medication-administration.public', function medicationAdministrationPublic() {
 *       let cursor = MedicationAdministration.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: MedicationAdministration.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.MedicationAdministration
 * @member Publications
 */
Meteor.publish('medication-administration.public', function medicationAdministrationPublic() {
    let cursor = MedicationAdministration.find({
        userId: { $exists: false },
    }, {
        fields: MedicationAdministration.publicFields
    });

    // return cursor;
});

Meteor.publish('medication-administration.private', function medicationAdministrationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = MedicationAdministration.find({
        userId: this.userId,
    }, {
        fields: MedicationAdministration.privateFields,
    });

    // return cursor;
});
