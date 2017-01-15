import { Meteor } from 'meteor/meteor';
import { AppointmentResponse } from './appointment-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('appointment-response.public', function appointmentResponsePublic() {
 *       let cursor = AppointmentResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: AppointmentResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.AppointmentResponse
 * @member Publications
 */
Meteor.publish('appointment-response.public', function appointmentResponsePublic() {
    let cursor = AppointmentResponse.find({
        userId: { $exists: false },
    }, {
        fields: AppointmentResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('appointment-response.private', function appointmentResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = AppointmentResponse.find({
        userId: this.userId,
    }, {
        fields: AppointmentResponse.privateFields,
    });

    // return cursor;
});
