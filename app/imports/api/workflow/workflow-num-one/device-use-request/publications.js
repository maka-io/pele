import { Meteor } from 'meteor/meteor';
import { DeviceUseRequest } from './device-use-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('device-use-request.public', function deviceUseRequestPublic() {
 *       let cursor = DeviceUseRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DeviceUseRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DeviceUseRequest
 * @member Publications
 */
Meteor.publish('device-use-request.public', function deviceUseRequestPublic() {
    let cursor = DeviceUseRequest.find({
        userId: { $exists: false },
    }, {
        fields: DeviceUseRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('device-use-request.private', function deviceUseRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DeviceUseRequest.find({
        userId: this.userId,
    }, {
        fields: DeviceUseRequest.privateFields,
    });

    // return cursor;
});
