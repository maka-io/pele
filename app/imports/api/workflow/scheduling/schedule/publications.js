import { Meteor } from 'meteor/meteor';
import { Schedule } from './schedule.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('schedule.public', function schedulePublic() {
 *       let cursor = Schedule.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Schedule.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Schedule
 * @member Publications
 */
Meteor.publish('schedule.public', function schedulePublic() {
    let cursor = Schedule.find({
        userId: { $exists: false },
    }, {
        fields: Schedule.publicFields
    });

    // return cursor;
});

Meteor.publish('schedule.private', function schedulePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Schedule.find({
        userId: this.userId,
    }, {
        fields: Schedule.privateFields,
    });

    // return cursor;
});
