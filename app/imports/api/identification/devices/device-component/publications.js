import { Meteor } from 'meteor/meteor';
import { DeviceComponent } from './device-component.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('device-component.public', function deviceComponentPublic() {
 *       let cursor = DeviceComponent.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DeviceComponent.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DeviceComponent
 * @member Publications
 */
Meteor.publish('device-component.public', function deviceComponentPublic() {
    let cursor = DeviceComponent.find({
        userId: { $exists: false },
    }, {
        fields: DeviceComponent.publicFields
    });

    // return cursor;
});

Meteor.publish('device-component.private', function deviceComponentPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DeviceComponent.find({
        userId: this.userId,
    }, {
        fields: DeviceComponent.privateFields,
    });

    // return cursor;
});
