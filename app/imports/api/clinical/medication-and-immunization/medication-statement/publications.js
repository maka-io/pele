import { Meteor } from 'meteor/meteor';
import { MedicationStatement } from './medication-statement.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('medication-statement.public', function medicationStatementPublic() {
 *       let cursor = MedicationStatement.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: MedicationStatement.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.MedicationStatement
 * @member Publications
 */
Meteor.publish('medication-statement.public', function medicationStatementPublic() {
    let cursor = MedicationStatement.find({
        userId: { $exists: false },
    }, {
        fields: MedicationStatement.publicFields
    });

    // return cursor;
});

Meteor.publish('medication-statement.private', function medicationStatementPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = MedicationStatement.find({
        userId: this.userId,
    }, {
        fields: MedicationStatement.privateFields,
    });

    // return cursor;
});
