import { Meteor } from 'meteor/meteor';
import { Slot } from './slot.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('slot.public', function slotPublic() {
 *       let cursor = Slot.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Slot.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Slot
 * @member Publications
 */
Meteor.publish('slot.public', function slotPublic() {
    let cursor = Slot.find({
        userId: { $exists: false },
    }, {
        fields: Slot.publicFields
    });

    // return cursor;
});

Meteor.publish('slot.private', function slotPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Slot.find({
        userId: this.userId,
    }, {
        fields: Slot.privateFields,
    });

    // return cursor;
});
