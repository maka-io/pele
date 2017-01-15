import { Meteor } from 'meteor/meteor';
import { Device } from './device.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('device.public', function devicePublic() {
 *       let cursor = Device.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Device.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Device
 * @member Publications
 */
Meteor.publish('device.public', function devicePublic() {
    let cursor = Device.find({
        userId: { $exists: false },
    }, {
        fields: Device.publicFields
    });

    // return cursor;
});

Meteor.publish('device.private', function devicePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Device.find({
        userId: this.userId,
    }, {
        fields: Device.privateFields,
    });

    // return cursor;
});
