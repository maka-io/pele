import { Meteor } from 'meteor/meteor';
import { DiagnosticOrder } from './diagnostic-order.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('diagnostic-order.public', function diagnosticOrderPublic() {
 *       let cursor = DiagnosticOrder.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DiagnosticOrder.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DiagnosticOrder
 * @member Publications
 */
Meteor.publish('diagnostic-order.public', function diagnosticOrderPublic() {
    let cursor = DiagnosticOrder.find({
        userId: { $exists: false },
    }, {
        fields: DiagnosticOrder.publicFields
    });

    // return cursor;
});

Meteor.publish('diagnostic-order.private', function diagnosticOrderPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DiagnosticOrder.find({
        userId: this.userId,
    }, {
        fields: DiagnosticOrder.privateFields,
    });

    // return cursor;
});
