import { Meteor } from 'meteor/meteor';
import { Goal } from './goal.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('goal.public', function goalPublic() {
 *       let cursor = Goal.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Goal.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Goal
 * @member Publications
 */
Meteor.publish('goal.public', function goalPublic() {
    let cursor = Goal.find({
        userId: { $exists: false },
    }, {
        fields: Goal.publicFields
    });

    // return cursor;
});

Meteor.publish('goal.private', function goalPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Goal.find({
        userId: this.userId,
    }, {
        fields: Goal.privateFields,
    });

    // return cursor;
});
