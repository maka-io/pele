import { Meteor } from 'meteor/meteor';
import { MedicationOrder } from './medication-order.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('medication-order.public', function medicationOrderPublic() {
 *       let cursor = MedicationOrder.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: MedicationOrder.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.MedicationOrder
 * @member Publications
 */
Meteor.publish('medication-order.public', function medicationOrderPublic() {
    let cursor = MedicationOrder.find({
        userId: { $exists: false },
    }, {
        fields: MedicationOrder.publicFields
    });

    // return cursor;
});

Meteor.publish('medication-order.private', function medicationOrderPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = MedicationOrder.find({
        userId: this.userId,
    }, {
        fields: MedicationOrder.privateFields,
    });

    // return cursor;
});
