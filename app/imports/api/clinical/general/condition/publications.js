import { Meteor } from 'meteor/meteor';
import { Condition } from './condition.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('condition.public', function conditionPublic() {
 *       let cursor = Condition.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Condition.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Condition
 * @member Publications
 */
Meteor.publish('condition.public', function conditionPublic() {
    let cursor = Condition.find({
        userId: { $exists: false },
    }, {
        fields: Condition.publicFields
    });

    // return cursor;
});

Meteor.publish('condition.private', function conditionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Condition.find({
        userId: this.userId,
    }, {
        fields: Condition.privateFields,
    });

    // return cursor;
});
