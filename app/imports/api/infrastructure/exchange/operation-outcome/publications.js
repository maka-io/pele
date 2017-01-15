import { Meteor } from 'meteor/meteor';
import { OperationOutcome } from './operation-outcome.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('operation-outcome.public', function operationOutcomePublic() {
 *       let cursor = OperationOutcome.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: OperationOutcome.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.OperationOutcome
 * @member Publications
 */
Meteor.publish('operation-outcome.public', function operationOutcomePublic() {
    let cursor = OperationOutcome.find({
        userId: { $exists: false },
    }, {
        fields: OperationOutcome.publicFields
    });

    // return cursor;
});

Meteor.publish('operation-outcome.private', function operationOutcomePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = OperationOutcome.find({
        userId: this.userId,
    }, {
        fields: OperationOutcome.privateFields,
    });

    // return cursor;
});
