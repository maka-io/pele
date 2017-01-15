import { Meteor } from 'meteor/meteor';
import { Patient } from './patient.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('patient.public', function patientPublic() {
 *       let cursor = Patient.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Patient.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Patient
 * @member Publications
 */
Meteor.publish('patient.public', function patientPublic() {
    let cursor = Patient.find({
        userId: { $exists: false },
    }, {
        fields: Patient.publicFields
    });

    // return cursor;
});

Meteor.publish('patient.private', function patientPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Patient.find({
        userId: this.userId,
    }, {
        fields: Patient.privateFields,
    });

    // return cursor;
});
