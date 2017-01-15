import { Meteor } from 'meteor/meteor';
import { Appointment } from './appointment.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('appointment.public', function appointmentPublic() {
 *       let cursor = Appointment.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Appointment.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Appointment
 * @member Publications
 */
Meteor.publish('appointment.public', function appointmentPublic() {
    let cursor = Appointment.find({
        userId: { $exists: false },
    }, {
        fields: Appointment.publicFields
    });

    // return cursor;
});

Meteor.publish('appointment.private', function appointmentPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Appointment.find({
        userId: this.userId,
    }, {
        fields: Appointment.privateFields,
    });

    // return cursor;
});
